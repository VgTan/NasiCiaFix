<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Menu::create([
            'name' => 'Koren Spicy Chicken',
            'description' => 'Spicy chicken seasoned with Korean-inspired spices',
            'image' => '/images/menus/koreanspicy.png',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Honey Garlic Chicken',
            'description' => 'Chicken glazed in honey and garlic sauce',
            'image' => '/images/menus/honey_garlic.jpg',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken Mushroom Sauce',
            'description' => 'Chicken cooked in a savory mushroom sauce',
            'image' => '/images/menus/',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken Salted Egg',
            'description' => 'Chicken dish with a rich salted egg flavor',
            'image' => '/images/menus/',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Karage Egg Mayo',
            'description' => 'Crispy chicken topped with creamy mayo',
            'image' => '/images/menus/',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken Katsu Teriyaki',
            'description' => 'Juicy chicken served with sweet teriyaki sauce',
            'image' => '/images/menus/',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken Katsu Teriyaki Egg Mayo',
            'description' => 'Crunchy chicken with savory teriyaki and mayo',
            'image' => '/images/menus/',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken Geprek Mozarella',
            'description' => 'Tender chicken topped with melted mozzarella cheese',
            'image' => '/images/menus/',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Chicken Teriyaki',
            'description' => 'Tender chicken glazed in savory teriyaki sauce',
            'image' => '/images/menus/',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Ayam Saos Mentega',
            'description' => 'Succulent chicken served with creamy butter sauce',
            'image' => '/images/menus/',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Ayam Cabe Garam',
            'description' => 'Spicy chicken seasoned with aromatic chili spices',
            'image' => '/images/menus/',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Ayam Geprek',
            'description' => 'Crispy chicken topped with spicy sambal sauce',
            'image' => '/images/menus/ayam_geprek.jpg',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Ayam Sambal Matah',
            'description' => 'Juicy chicken served with tangy matah sambal',
            'image' => '/images/menus/',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        Menu::create([
            'name' => 'Ayam Cabe Ijo',
            'description' => 'Delicious chicken dish with green chili sauce',
            'image' => '/images/menus/cabe_ijo.jpg',
            'category' => 'Chicken Rice Bowl',
            'price' => 30000,
        ]);
        //fish bowl
        Menu::create([
            'name' => 'Korean Spicy Fish',
            'description' => 'Delicious Korean-style spicy fish rice bowl',
            'image' => '/images/menus/',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Honey Garlic Fish',
            'description' => 'Tasty honey garlic glazed fish rice bowl',
            'image' => '/images/menus/',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Fish Mushroom Sauce',
            'description' => 'Savory fish served with mushroom sauce over rice',
            'image' => '/images/menus/',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Fish Salted Egg',
            'description' => 'Flavorful fish with salted egg sauce on a bed of rice',
            'image' => '/images/menus/',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Ikan Saus Mentega',
            'description' => 'Buttery fish served with special sauce',
            'image' => '/images/menus/',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Ikan Cabe Garam',
            'description' => 'Spicy and savory fish with salted chili',
            'image' => '/images/menus/',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Ikan Geprek',
            'description' => 'Crispy fish served with spicy sauce and crushed fried garlic',
            'image' => '/images/menus/',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Ikan Sambel Matah',
            'description' => 'Fresh fish served with Balinese raw chili sauce',
            'image' => '/images/menus/',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Ikan Cabe Ijo',
            'description' => 'Spicy fish with green chili sauce',
            'image' => '/images/menus/',
            'category' => 'Fish Rice Bowl',
            'price' => 32000,
        ]);
        
        //Shrimp rice bowl
        Menu::create([
            'name' => 'Korean Spicy Shrimp',
            'description' => 'Delicious Korean-style spicy shrimp rice bowl',
            'image' => '/images/menus/',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Honey Garlic Shrimp',
            'description' => 'Tasty honey garlic glazed shrimp rice bowl',
            'image' => '/images/menus/',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Shrimp Mushroom Sauce',
            'description' => 'Savory shrimp served with mushroom sauce over rice',
            'image' => '/images/menus/',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Shrimp Salted Egg',
            'description' => 'Flavorful shrimp with salted egg sauce on a bed of rice',
            'image' => '/images/menus/',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Udang Saus Mentega',
            'description' => 'Buttery shrimp served with special sauce',
            'image' => '/images/menus/',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Udang Cabe Garam',
            'description' => 'Spicy and savory shrimp with salted chili',
            'image' => '/images/menus/',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Udang Geprek',
            'description' => 'Crispy shrimp served with spicy sauce and crushed fried garlic',
            'image' => '/images/menus/',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Udang Sambel Matah',
            'description' => 'Fresh shrimp served with Balinese raw chili sauce',
            'image' => '/images/menus/',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        
        Menu::create([
            'name' => 'Udang Cabe Ijo',
            'description' => 'Spicy shrimp with green chili sauce',
            'image' => '/images/menus/',
            'category' => 'Shrimp Rice Bowl',
            'price' => 32000,
        ]);
        
        //beef rice bowl
        Menu::create([
            'name' => 'Beef Blackpepper',
            'description' => 'Tender beef slices cooked in flavorful black pepper sauce',
            'image' => '/images/menus/',
            'category' => 'Beef Rice Bowl',
            'price' => 38000,
        ]);
        
        Menu::create([
            'name' => 'Beef Yakiniku',
            'description' => 'Juicy beef slices marinated in savory yakiniku sauce',
            'image' => '/images/menus/',
            'category' => 'Beef Rice Bowl',
            'price' => 38000,
        ]);
        
        //Drink
        Menu::create([
            'name' => 'Dalgona Milk',
            'description' => 'Creamy milk topped with sweet whipped coffee foam',
            'image' => '/images/menus/kopi.jpg',
            'category' => 'Drink',
            'price' => 15000,
        ]);
        
        Menu::create([
            'name' => 'Strawberry Milk',
            'description' => 'Refreshing milk with sweet strawberry flavor',
            'image' => '/images/menus/strawberrymilk.jpg',
            'category' => 'Drink',
            'price' => 15000,
        ]);
        //Mentai Rice
        Menu::create([
            'name' => 'Kani Mentai',
            'description' => 'Delicious rice bowl topped with crab stick and mentaiko sauce',
            'image' => '/images/menus/',
            'category' => 'Mentai Rice',
            'price' => 25000,
        ]);
        
        Menu::create([
            'name' => 'Chicken Katsu Mentai',
            'description' => 'Crispy chicken katsu served with savory mentaiko sauce over rice',
            'image' => '/images/menus/mentaichicken.png',
            'category' => 'Mentai Rice',
            'price' => 30000,
        ]);
        
        Menu::create([
            'name' => 'Chicken KatsuKkani Mentai Rice',
            'description' => 'Crispy chicken katsu and crab stick served with mentaiko sauce over rice',
            'image' => '/images/menus/',
            'category' => 'Mentai Rice',
            'price' => 35000,
        ]);
        
        Menu::create([
            'name' => 'Ebi Katsu Mentai',
            'description' => 'Crispy ebi katsu topped with flavorful mentaiko sauce over rice',
            'image' => '/images/menus/',
            'category' => 'Mentai Rice',
            'price' => 35000,
        ]);
        
        Menu::create([
            'name' => 'Ebi Katsu Kani Mentai',
            'description' => 'Crispy ebi katsu and crab stick served with creamy mentaiko sauce over rice',
            'image' => '/images/menus/',
            'category' => 'Mentai Rice',
            'price' => 40000,
        ]);
        
        Menu::create([
            'name' => 'Salmon Mentai',
            'description' => 'Fresh salmon slices drizzled with delicious mentaiko sauce over rice',
            'image' => '/images/menus/',
            'category' => 'Mentai Rice',
            'price' => 40000,
        ]);
        
        Menu::create([
            'name' => 'Salmon Kani Mentai',
            'description' => 'Fresh salmon slices and crab stick served with creamy mentaiko sauce over rice',
            'image' => '/images/menus/',
            'category' => 'Mentai Rice',
            'price' => 45000,
        ]);
        
        Menu::create([
            'name' => 'Tuna Mentai',
            'description' => 'Tender tuna slices topped with flavorful mentaiko sauce over rice',
            'image' => '/images/menus/',
            'category' => 'Mentai Rice',
            'price' => 35000,
        ]);
        
        Menu::create([
            'name' => 'Tuna Kani Mentai',
            'description' => 'Tender tuna slices and crab stick served with creamy mentaiko sauce over rice',
            'image' => '/images/menus/',
            'category' => 'Mentai Rice',
            'price' => 40000,
        ]);

        //nusantara
        Menu::create([
            'name' => 'Ayam Bakar',
            'description' => 'Juicy grilled chicken marinated in Indonesian spices',
            'image' => '/images/menus/nusanbakar.png',
            'category' => 'Nusantara',
            'price' => 30000,
        ]);

        Menu::create([
            'name' => 'Ayam Kalasan',
            'description' => 'Tender chicken cooked in traditional Kalasan style',
            'image' => '/images/menus/',
            'category' => 'Nusantara',
            'price' => 30000,
        ]);

        Menu::create([
            'name' => 'Nila Goreng',
            'description' => 'Crispy fried tilapia fish served with sambal matah',
            'image' => '/images/menus/',
            'category' => 'Nusantara',
            'price' => 30000,
        ]);

        Menu::create([
            'name' => 'Nila Bakar',
            'description' => 'Grilled tilapia fish seasoned with local spices',
            'image' => '/images/menus/nusannilabak.png',
            'category' => 'Nusantara',
            'price' => 30000,
        ]);

        Menu::create([
            'name' => 'Crispy Matah',
            'description' => 'Crispy fried chicken served with Balinese raw chili sauce',
            'image' => '/images/menus/nusanmatah.png',
            'category' => 'Nusantara',
            'price' => 30000,
        ]);

        Menu::create([
            'name' => 'Crispy Tempong',
            'description' => 'Crispy fried chicken with a spicy and tangy tempong sauce',
            'image' => '/images/menus/',
            'category' => 'Nusantara',
            'price' => 30000,
        ]);

        //Snack
        Menu::create([
            'name' => 'Pangsit Ayam',
            'description' => 'Crispy chicken dumplings served with dipping sauce',
            'image' => '/images/menus/snackall.png',
            'category' => 'Snack',
            'price' => 25000,
        ]);
        
        Menu::create([
            'name' => 'Pangsit Udang',
            'description' => 'Delicious shrimp dumplings served with dipping sauce',
            'image' => '/images/menus/snackall.png',
            'category' => 'Snack',
            'price' => 30000,
        ]);
        
        Menu::create([
            'name' => 'French Fries',
            'description' => 'Crispy and golden fries served with ketchup or mayonnaise',
            'image' => '/images/menus/snackall.png',
            'category' => 'Snack',
            'price' => 18000,
        ]);
        
        Menu::create([
            'name' => 'Siumay Dimsum',
            'description' => 'Steamed dimsum filled with savory chicken and shrimp',
            'image' => '/images/menus/snackall.png',
            'category' => 'Snack',
            'price' => 35000,
        ]);
        
        Menu::create([
            'name' => 'Siumay Mentai',
            'description' => 'Steamed dimsum filled with chicken and shrimp topped with mentaiko sauce',
            'image' => '/images/menus/snackall.png',
            'category' => 'Snack',
            'price' => 35000,
        ]);
        
        Menu::create([
            'name' => 'Cakwe Ayam',
            'description' => 'Crispy fried dough sticks served with chicken floss',
            'image' => '/images/menus/snackall.png',
            'category' => 'Snack',
            'price' => 30000,
        ]);
        
        Menu::create([
            'name' => 'Cakwe Udang',
            'description' => 'Crispy fried dough sticks served with shrimp floss',
            'image' => '/images/menus/snackall.png',
            'category' => 'Snack',
            'price' => 35000,
        ]);
        
        Menu::create([
            'name' => 'Snack Platter',
            'description' => 'Assorted snacks including pangsit, fries, and wings',
            'image' => '/images/menus/snackall.png',
            'category' => 'Snack',
            'price' => 40000,
        ]);
        
        Menu::create([
            'name' => 'Honey Wings',
            'description' => 'Crispy fried chicken wings glazed with honey sauce',
            'image' => '/images/menus/snackall.png',
            'category' => 'Snack',
            'price' => 30000,
        ]);
        
        Menu::create([
            'name' => 'Korean Spicy Wings',
            'description' => 'Spicy fried chicken wings seasoned with Korean spices',
            'image' => '/images/menus/snackall.png',
            'category' => 'Snack',
            'price' => 30000,
        ]);
        
        Menu::create([
            'name' => 'Original Grilled Wings',
            'description' => 'Tender grilled chicken wings marinated in original spices',
            'image' => '/images/menus/snackall.png',
            'category' => 'Snack',
            'price' => 30000,
        ]);        
    }
}
