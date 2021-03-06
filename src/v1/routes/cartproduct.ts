import { Router } from 'express';
import CartProductController from '../controllers/CartProductController';
import { checkJwt } from '../../middlewares/checkJwt';
import { checkRole } from '../../middlewares/checkRole';

const cartproduct_router = Router();

// Get all cart products
cartproduct_router.get(
	'/',
	[checkJwt, checkRole(['ADMIN'])],
	CartProductController.ListAllCartProducts
);

// Get cart product by ID
cartproduct_router.get(
	'/:id([0-9]+)',
	[checkJwt, checkRole(['ADMIN', 'CUSTOMER'])],
	CartProductController.GetOneCartProductById
);

// Add cart product by ID
cartproduct_router.post(
	'/add',
	[checkJwt, checkRole(['ADMIN', 'CUSTOMER'])],
	CartProductController.AddCartProduct
);

export default cartproduct_router;
