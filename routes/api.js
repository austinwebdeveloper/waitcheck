var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');
var resturentController = require('../controllers/resturentController');

router.get('/:resource', function(req, res, next){

    var resource = req.params.resource;

    if(resource == 'login') {
        loginController.find(req.query, function(err, results){
            if(err) {
                res.json({
                    confirmation: 'fail',
                    message: err
                })

                return
            }
            else {

                res.json({

                    confirmation: 'success',
                    results: results

                })
            }

        })
    }

    if(resource == 'resturents')
    {
        resturentController.find(req.query, function(err, results){
            if(err) {
                res.json({
                    confirmation: 'fail',
                    message: err
                })

                return
            }
            else {

                res.json({

                    confirmation: 'success',
                    results: results

                })
            }

        })
    }

})


router.get('/:resource/:id', function(req, res, next){

    var resource = req.params.resource;

    var id = req.params.id;

    if(resource == 'login') {

        loginController.findById(id, function (err, result) {

            if (err) {

                res.json({
                    confirmation: 'fail',
                    message: err
                })

                return
            }
            else {

                res.json({

                    confirmation: 'success',
                    result: result

                })
            }

        })

    }

    if(resource == 'resturent')
    {
        resturentController.findById(id, function (err, result) {

            if (err) {

                res.json({
                    confirmation: 'fail',
                    message: err
                })

                return
            }
            else {

                res.json({

                    confirmation: 'success',
                    result: result

                })
            }

        })
    }

})


router.post('/:resource', function(req, res, next){

    var resource = req.params.resource;

    if(resource == 'login') {
        loginController.create(req.body, function(err, result){
            if(err) {
                res.json ({
                    confirmation: 'fail',
                    message:  err
                })

                return
            }
            else {

                res.json({

                    confirmation: 'success',
                    results: result

                })
            }

        })
    }


    if(resource == 'resturent') {

        resturentController.create(req.body, function(err, result){
            if(err) {
                res.json ({
                    confirmation: 'fail',
                    message:  err
                })

                return
            }
            else {

                res.json({

                    confirmation: 'success',
                    results: result

                })
            }

        })
    }

})


router.post('/:resource/update/:id', function(req, res, next){

    var resource = req.params.resource;

    var id = req.params.id;

    if(resource == 'login') {

        loginController.update(id, req.body,  function (err, result) {

            if (err) {

                res.json({
                    confirmation: 'fail',
                    message: err
                })

                return
            }
            else {

                res.json({

                    confirmation: 'success',
                    result: result

                })
            }

        })

    }
})

router.post('/:resource/:id', function(req, res, next){

    var resource = req.params.resource;

    var id = req.params.id;

    if(resource == 'remove') {

        loginController.delete(id, function (err, result) {

            if (err) {

                res.json({
                    confirmation: 'fail',
                    message: err
                })

                return
            }
            else {

                res.json({

                    confirmation: 'success',
                    result: result

                })
            }

        })

    }
})


module.exports = router
