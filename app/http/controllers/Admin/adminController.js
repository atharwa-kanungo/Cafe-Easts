const Order = require('../../../models/order');

 function adminController(){
    //using factory function
       return{
          async index(req, res) {

         
         //   const order = await  Order.find({status:{ $ne: 'completed'}},null,{sort:{'createdAt':-1}}).populate('customerId','-password').exec((err,orders)=>{
                    // res.render('admin/adminCafeEats',{order:orders});

         //     });



            try {
               const orders = await Order.find({ status: { $ne: 'completed' } }).sort({ createdAt: -1 }).populate('customerId', '-password');
               //  console.log(orders);
                res.render('admin/adminCafeEats', { orders });
           } catch (error) {
               console.error(error);
               res.status(500).send('Internal Server Error');
           }

        }

      
        
       }
    
    }
    
    module.exports = adminController;