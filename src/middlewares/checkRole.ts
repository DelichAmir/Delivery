import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Client } from '../entity/client';

export const checkRole = (roles: Array<string>) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		// Get the user ID from midleware.checkJwt
		const id = res.locals.jwtPayload.userId;

		// Get user role from the database
		const userRepository = getRepository(Client);
		let user: Client;
		try {
			user = await userRepository.findOneOrFail(id);
		} catch (id) {
			res.status(401).send();
		}

		// Check if array of authorized roles includes the user's role
		if (roles.indexOf(user.role) > -1) next();
		else
			res.status(401).json({
				message: 'Access denied, contact admin.',
				status: 'false'
			});
	};
};
