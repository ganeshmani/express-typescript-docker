import { RoutesInput } from '../types/route';
import UserController from '../Controllers/User.controller';

export default ({ app } : RoutesInput) => {

    app.post('api/user',async(req,res) => {
        const user = await UserController.CreateUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
          });
      
          return res.send({ user });
    })
}
