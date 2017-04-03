"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var firebase = require("firebase");
var angular2_uuid_1 = require('angular2-uuid');
var AddArticleComponent = (function () {
    function AddArticleComponent(location, af, router, firebaseApp) {
        var _this = this;
        this.location = location;
        this.af = af;
        this.router = router;
        this.gallery = [];
        this.msgs = [];
        this.articles = af.database.list('/ARTICLES');
        this.galleries = af.database.list('/GALLERY');
        this.numberOfClicks = 0;
        this.af.auth.subscribe(function (authData) {
            _this.uid = authData.uid;
            _this.email = authData.auth.email;
            _this.uuid = angular2_uuid_1.UUID.UUID();
        });
        this.users = af.database.list('/USERS', {
            preserveSnapshot: true,
            query: {
                orderByChild: 'uid',
                equalTo: this.uid,
            },
        });
        this.angularFireState = af;
        this.users
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                var specificUser = snapshot.key;
                _this.user = _this.af.database.object('/USERS/' + specificUser, {
                    preserveSnapshot: true
                });
                _this.user.subscribe(function (snapshot) {
                    _this.firstName = snapshot.val().firstName;
                    _this.lastName = snapshot.val().lastName;
                });
            });
        });
        this.completed = false;
        this.clicked = false;
        this.showMessage = true;
        this.spinner = true;
        setTimeout(function () {
            _this.msgs.push({ severity: 'success', summary: 'Hooray', detail: 'Upload Completed!' });
        }, 0);
    }
    AddArticleComponent.prototype.onChange = function (event) {
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.file = files[0];
    };
    ;
    AddArticleComponent.prototype.onGallChange = function (event) {
        var _this = this;
        var eventObj = event;
        var target = eventObj.target;
        var tempGal = target.files;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.gallery.push(e.target.result);
        };
        reader.readAsDataURL(target.files[0]);
        //this.gallery.push(tempGal[0])
        console.log(this.gallery);
        //
        // input.value = files.map(f => f.name).join(', ');
    };
    AddArticleComponent.prototype.uploadGallery = function () {
        var _this = this;
        for (var i = 0; i < this.gallery.length; i++) {
            this.storage = firebase.storage().ref();
            this.path = "Article Images/" + this.email + "-" + this.uid + "-" + this.uuid + "-image" + i;
            this.storageref = this.storage.child(this.path);
            var that = this;
            var uploadTask = this.storageref.putString(this.gallery[i], 'data_url');
            uploadTask.on('state_changed', function (snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                that.progress = progress;
                that.spinner = true;
                that.showMessage = true;
                if (progress == 100) {
                    that.completed = true;
                    that.spinner = false;
                    setTimeout(function () {
                        that.showMessage = false;
                        that.completed = false;
                    }, 3000);
                }
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED:
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING:
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {
                // Handle unsuccessful uploads
            }, function () {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                var imglink = uploadTask.snapshot.downloadURL;
                console.log(imglink);
                this.gallery[i] = imglink;
            });
        }
        var obj = {};
        this.gallery.forEach(function (data, i) {
            obj[i] = this.gallery[i];
        });
        console.log(obj);
        this.galleries.push(obj).then(function (gallery) {
            console.log(gallery.key);
            _this.galleryId = gallery.key;
        });
    };
    AddArticleComponent.prototype.UploadFile = function () {
        this.storage = firebase.storage().ref();
        this.path = "Profile Pictures/" + this.email + "-" + this.uid + "-" + this.uuid;
        this.storageref = this.storage.child(this.path);
        this.imageLink = "";
        var uploadTask = this.storageref.put(this.file);
        var that = this;
        uploadTask.on('state_changed', function (snapshot) {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            that.progress = progress;
            that.spinner = true;
            that.showMessage = true;
            if (progress == 100) {
                that.completed = true;
                that.spinner = false;
                setTimeout(function () {
                    that.showMessage = false;
                    that.completed = false;
                }, 3000);
            }
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING:
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {
            // Handle unsuccessful uploads
        }, function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            var imglink = uploadTask.snapshot.downloadURL;
            console.log(imglink);
            that.imageLink = imglink;
        });
    };
    AddArticleComponent.prototype.onSubmit = function (formData, event) {
        var _this = this;
        event.preventDefault();
        this.newObject = this.articles.push({
            title: formData.value.title,
            authorUID: this.uid,
            urlToImage: this.imageLink,
            category: this.category,
            articleData: formData.value.data,
            subtitle: formData.value.subTitle,
            authorFname: this.firstName,
            authorLname: this.lastName,
            timeAndDateCreated: Date.now(),
            lastUpdated: "Today",
            numberOfClicks: this.numberOfClicks,
            galleryID: this.galleryId,
        }).then(function (item) {
            console.log(item.key);
            var itemkey = item.key;
            _this.articleObject = _this.angularFireState.database.object('/ARTICLES/' + itemkey);
            _this.articleObject.update({ articleID: itemkey });
        });
    };
    AddArticleComponent.prototype.setClicked = function (event) {
        this.clicked = true;
    };
    AddArticleComponent.prototype.categoryChange = function (dropdown) {
        this.category = dropdown.value;
    };
    AddArticleComponent.prototype.changeCompleted = function () {
        this.completed = false;
    };
    AddArticleComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddArticleComponent = __decorate([
        core_1.Component({
            selector: 'app-add-article',
            templateUrl: './add-article.component.html',
            styleUrls: ['./add-article.component.css'],
        }),
        __param(3, core_1.Inject(angularfire2_1.FirebaseApp))
    ], AddArticleComponent);
    return AddArticleComponent;
}());
exports.AddArticleComponent = AddArticleComponent;
