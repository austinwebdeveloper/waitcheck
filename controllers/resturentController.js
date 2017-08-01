var resturent = require('../models/resturents');

module.exports = {


    find: function(params, callback){

        resturent.find(params, function(err, logins){

            if(err) {

                callback(err, null)
                return

            }

            callback(null, logins)


        })


    },


    findById: function(id, callback){

        resturent.findById(id, function(err, login){

            if(err) {

                callback(err, null)
                return

            }

            callback(null, login)

        })

    },

    create: function(params, callback){

        resturent.create(params, function(err, login){

            if(err) {

                callback(err, null)
                return

            }

            callback(null, login)




        })


    },

    update: function(id, params, callback){

        resturent.findByIdAndUpdate(id, params, {new:true}, function(err, login){

            if(err)
            {
                callback(err, null)
                return
            }

            callback(null, login)

        })


    },

    delete: function(id, callback){

        resturent.findByIdAndRemove(id, function(err){

            if(err)
            {
                callback(err, null)
                return
            }

            callback(null, null)


        })

    }




}