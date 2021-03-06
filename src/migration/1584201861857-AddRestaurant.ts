import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Restaurant } from '../entity/restaurant';

export class AddRestaurant1584201861857 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		const restaurantRepository = getRepository(Restaurant);

		// Adding restaurants
		let restaurant = new Restaurant();
		restaurant.name = 'Додо Пицца';
		restaurant.address = 'г.Москва, 1-я ул. Машиностроения, 10';
		restaurant.phone = '88003330060';
		await restaurantRepository.save(restaurant);

		let restaurant2 = new Restaurant();
		restaurant2.name = "Домино'с пицца";
		restaurant2.address = 'г.Москва, Новокузнецкая ул., 6';
		restaurant2.phone = '74959000157';
		await restaurantRepository.save(restaurant2);

		let restaurant3 = new Restaurant();
		restaurant3.name = 'Папа Джонс';
		restaurant3.address = 'г.Москва, Большой Факельный переулок, 3, стр. 2';
		restaurant3.phone = '74957750794';
		await restaurantRepository.save(restaurant3);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {}
}
