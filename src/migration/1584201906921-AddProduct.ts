import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Product } from '../entity/product';

export class AddProduct1584201906921 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		const productRepository = getRepository(Product);

		// Add products to menu_1
		let product = new Product();
		product.name = 'Пицца Маргарита';
		product.category = 'Пицца';
		product.price = 250;
		product.count = 10;
		product.menu_id = 1;
		await productRepository.save(product);

		let product2 = new Product();
		product2.name = 'Пицца Четыре Сыра';
		product2.category = 'Пицца';
		product2.price = 300;
		product2.count = 10;
		product2.menu_id = 1;
		await productRepository.save(product2);

		let product3 = new Product();
		product3.name = 'Пицца Вегетарианская';
		product3.category = 'Пицца';
		product3.price = 350;
		product3.count = 10;
		product3.menu_id = 1;
		await productRepository.save(product3);

		let product4 = new Product();
		product4.name = 'Пицца Гавайская';
		product4.category = 'Пицца';
		product4.price = 240;
		product4.count = 10;
		product4.menu_id = 1;
		await productRepository.save(product4);

		let product5 = new Product();
		product5.name = 'Пицца Пепперони';
		product5.category = 'Пицца';
		product5.price = 400;
		product5.count = 10;
		product5.menu_id = 1;
		await productRepository.save(product5);

		let product6 = new Product();
		product6.name = 'Куриные крылья';
		product6.category = 'Закуски';
		product6.price = 150;
		product6.count = 10;
		product6.menu_id = 1;
		await productRepository.save(product6);

		let product7 = new Product();
		product7.name = 'Куриные шарики';
		product7.category = 'Закуски';
		product7.price = 100;
		product7.count = 10;
		product7.menu_id = 1;
		await productRepository.save(product7);

		let product8 = new Product();
		product8.name = 'Наггетсы';
		product8.category = 'Закуски';
		product8.price = 90;
		product8.count = 10;
		product8.menu_id = 1;
		await productRepository.save(product8);

		let product9 = new Product();
		product9.name = 'Картофель Фри';
		product9.category = 'Закуски';
		product9.price = 60;
		product9.count = 10;
		product9.menu_id = 1;
		await productRepository.save(product9);

		let product10 = new Product();
		product10.name = 'Сырный';
		product10.category = 'Соусы';
		product10.price = 15;
		product10.count = 10;
		product10.menu_id = 1;
		await productRepository.save(product10);

		let product11 = new Product();
		product11.name = 'Томатный';
		product11.category = 'Соусы';
		product11.price = 15;
		product11.count = 10;
		product11.menu_id = 1;
		await productRepository.save(product11);

		let product12 = new Product();
		product12.name = 'Барбекю';
		product12.category = 'Соусы';
		product12.price = 31500;
		product12.count = 10;
		product12.menu_id = 1;
		await productRepository.save(product12);

		let product13 = new Product();
		product13.name = 'Pepsi';
		product13.category = 'Напитки';
		product13.price = 45;
		product13.count = 10;
		product13.menu_id = 1;
		await productRepository.save(product13);

		let product14 = new Product();
		product14.name = '7UP';
		product14.category = 'Напитки';
		product14.price = 45;
		product14.count = 10;
		product14.menu_id = 1;
		await productRepository.save(product14);

		let product15 = new Product();
		product15.name = 'Mirinda';
		product15.category = 'Напитки';
		product15.price = 45;
		product15.count = 10;
		product15.menu_id = 1;
		await productRepository.save(product15);

		let product16 = new Product();
		product16.name = 'Coca-Cola';
		product16.category = 'Напитки';
		product16.price = 45;
		product16.count = 10;
		product16.menu_id = 1;
		await productRepository.save(product16);

		let product17 = new Product();
		product17.name = 'Lipton';
		product17.category = 'Напитки';
		product17.price = 45;
		product17.count = 10;
		product17.menu_id = 1;
		await productRepository.save(product17);

		// Add products to menu_2
		let product18 = new Product();
		product18.name = 'Пицца Маргарита';
		product18.category = 'Пицца';
		product18.price = 250;
		product18.count = 10;
		product18.menu_id = 2;
		await productRepository.save(product18);

		let product19 = new Product();
		product19.name = 'Пицца Четыре Сыра';
		product19.category = 'Пицца';
		product19.price = 300;
		product19.count = 10;
		product19.menu_id = 2;
		await productRepository.save(product19);

		let product20 = new Product();
		product20.name = 'Пицца Вегетарианская';
		product20.category = 'Пицца';
		product20.price = 350;
		product20.count = 10;
		product20.menu_id = 2;
		await productRepository.save(product20);

		let product21 = new Product();
		product21.name = 'Куриные крылья';
		product21.category = 'Закуски';
		product21.price = 150;
		product21.count = 10;
		product21.menu_id = 2;
		await productRepository.save(product21);

		let product22 = new Product();
		product22.name = 'Картофель Фри';
		product22.category = 'Закуски';
		product22.price = 60;
		product22.count = 10;
		product22.menu_id = 2;
		await productRepository.save(product22);

		let product23 = new Product();
		product23.name = 'Сырный';
		product23.category = 'Соусы';
		product23.price = 15;
		product23.count = 10;
		product23.menu_id = 2;
		await productRepository.save(product23);

		let product24 = new Product();
		product24.name = 'Томатный';
		product24.category = 'Соусы';
		product24.price = 15;
		product24.count = 10;
		product24.menu_id = 2;
		await productRepository.save(product24);

		let product25 = new Product();
		product25.name = 'Барбекю';
		product25.category = 'Соусы';
		product25.price = 31500;
		product25.count = 10;
		product25.menu_id = 2;
		await productRepository.save(product25);

		let product26 = new Product();
		product26.name = 'Pepsi';
		product26.category = 'Напитки';
		product26.price = 45;
		product26.count = 10;
		product26.menu_id = 2;
		await productRepository.save(product26);

		let product27 = new Product();
		product27.name = 'Coca-Cola';
		product27.category = 'Напитки';
		product27.price = 45;
		product27.count = 10;
		product27.menu_id = 2;
		await productRepository.save(product27);

		let product28 = new Product();
		product28.name = 'Lipton';
		product28.category = 'Напитки';
		product28.price = 45;
		product28.count = 10;
		product28.menu_id = 2;
		await productRepository.save(product28);

		// Add products to menu_3
		let product29 = new Product();
		product29.name = 'Пицца Маргарита';
		product29.category = 'Пицца';
		product29.price = 250;
		product29.count = 10;
		product29.menu_id = 3;
		await productRepository.save(product29);

		let product30 = new Product();
		product30.name = 'Пицца Вегетарианская';
		product30.category = 'Пицца';
		product30.price = 350;
		product30.count = 10;
		product30.menu_id = 3;
		await productRepository.save(product30);

		let product31 = new Product();
		product31.name = 'Пицца Гавайская';
		product31.category = 'Пицца';
		product31.price = 240;
		product31.count = 10;
		product31.menu_id = 3;
		await productRepository.save(product31);

		let product32 = new Product();
		product32.name = 'Пицца Пепперони';
		product32.category = 'Пицца';
		product32.price = 400;
		product32.count = 10;
		product32.menu_id = 3;
		await productRepository.save(product32);

		let product33 = new Product();
		product33.name = 'Наггетсы';
		product33.category = 'Закуски';
		product33.price = 90;
		product33.count = 10;
		product33.menu_id = 3;
		await productRepository.save(product33);

		let product34 = new Product();
		product34.name = 'Картофель Фри';
		product34.category = 'Закуски';
		product34.price = 60;
		product34.count = 10;
		product34.menu_id = 3;
		await productRepository.save(product34);

		let product35 = new Product();
		product35.name = 'Сырный';
		product35.category = 'Соусы';
		product35.price = 15;
		product35.count = 10;
		product35.menu_id = 3;
		await productRepository.save(product35);

		let product36 = new Product();
		product36.name = 'Барбекю';
		product36.category = 'Соусы';
		product36.price = 31500;
		product36.count = 10;
		product36.menu_id = 3;
		await productRepository.save(product36);

		let product37 = new Product();
		product37.name = 'Coca-Cola';
		product37.category = 'Напитки';
		product37.price = 45;
		product37.count = 10;
		product37.menu_id = 3;
		await productRepository.save(product37);

		let product38 = new Product();
		product38.name = 'Lipton';
		product38.category = 'Напитки';
		product38.price = 45;
		product38.count = 10;
		product38.menu_id = 3;
		await productRepository.save(product38);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {}
}
