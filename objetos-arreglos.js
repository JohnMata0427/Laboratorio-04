//// 1. Object Fundamentals

    // A. Difference between object and array

    // Object
    const perfil = {
        name: 'Jane Doe',
        favoriteGame: 'Stardew Valley',
        suscriptor: false,
    }

    // JSON
    
    const perfils = [
    {
    "nombre": "Jane Doe",
    "juego-favorito": "Stardew Valley",
    "suscriptor": false
    },
    {
    "nombre": "John Doe",
    "juego-favorito": "Dragon Quest XI",
    "suscriptor": true
    }
   ]

    // B. Accessing and deleting properties

    const Employee = {
        firstname: 'Maria',
        lastname: 'Sanchez',
    };

    console.log(Employee.firstname); // Maria

    delete Employee.firstname;

    console.log(Employee.firstname); // undefined

////

//// 2. Object Destructuring

    // First Example
    ({ x, y } = { a: 10, b: 20 });

    console.log(x); // 10
    console.log(y); // 20

    // Second Example
    const shop = {
        company: 'Amazon',
        location: 'Ecuador',
        products: ['laptop', 'smartphone', 'tablet'],
    };

    const { company, location, products, value } = shop;

    console.log(company); // Amazon
    console.log(location); // Ecuador
    console.log(products); // ['laptop', 'smartphone', 'tablet']
    console.log(value); // undefined (not in the object)

    // Third Example

    const TV = {
        tipo:"SmartTV",
        pulgadas: "60",
        precio: "700",
        definicion: "4k"
    }
    
    const {tipo, pulgadas, ...details} = TV
    
    console.log(tipo); // SmartTV
    console.log(pulgadas); // 60
    console.log(details); // { precio: '700', definicion: '4k' }
    console.log(TV.definicion); // 4k -> Original object is not modified

////

//// 3. Freezing Objects

    // A. freeze() method
    const amazonData = {
        name: 'Amazon',
        location: 'USA',
        fundation: 1994,
    };

    Object.freeze(amazonData);

    amazonData.location = 'Ecuador'; // Error: Cannot assign to read only property 'location' of object

    console.log(amazonData.location); // USA

    // B. seal() method

    const offersAmazon = {
        product: 'PC Gamer',
        year: 2024,
        price: 2000,
        offerPrice: 1500,
    };

    Object.seal(offersAmazon);

    delete offersAmazon.price; // Not possible to delete
    offersAmazon.newDiscount = 100; // Not possible to add new properties
    offersAmazon.offerPrice = 1400; // Possible to modify

    console.log(offersAmazon); // { product: 'PC Gamer', year: 2024, price: 2000, offerPrice: 1400 }

////

//// 4. Copying Objects

    // A. Spread Operator
    // It is used to separate or decompose the elements of an object or array and copy them

    const productsAmazon = {
        product : "God of War Video Game",
        description : "A great game",
        price : 50,
    }

    const productsWithoutDiscount = {
        ...productsAmazon,
        discount : "Not available"
    }

    console.log(productsWithoutDiscount)

////

//// 5. This in Objects

    const amazonInfo = {
        name: 'Amazon',
        location: 'USA',
        webSite: 'https://www.amazon.com',
        showInfo: function() {
            console.log(`The company name is ${this.name}, it is located in ${this.location} and its website is ${this.webSite}`);
        },
        // webSitePresentation: () => {
        //     console.log(`The website is ${webSite}`)
        // } -> Error
    }

    amazonInfo.showInfo(); // The company name is Amazon, it is located in USA and its website is https://www.amazon.com

    // amazonInfo.webSitePresentation(); -> The website is undefined

////

//// 6. Object Methods

    const userInfo = {
        username: 'John0427',
        age: 22,
        email: 'jhon4@gmail.com',
        deliverTo: 'Ecuador',
        shoppingCart: ['Beats Headphones', 'iPhone 12', 'Apple Watch'],
        address: {
            street: 'Chillogallo',
            number: 12345,
            city: 'Quito',
            country: 'Ecuador',
        },
        sendNotification: function() {
            console.log(`Hi ${this.username}, your order has been sent to ${this.deliverTo}`);
        }
    }

    // A. keys() method

    console.log(Object.keys(userInfo)); // ['username', 'age', 'email', 'deliverTo', 'shoppingCart', 'address', 'sendNotification'] -> Returns array of keys

    // B. values() method

    console.log(Object.values(userInfo)); // ['John0427', 22, ...] -> Returns array of values

    // C. entries() method

    console.log(Object.entries(userInfo)); // [['username', 'John0427'], ['age', 22], ...] -> Returns array of arrays

////

//// 7. ES6 Abreviations

    let productName = 'Samsung Galaxy S24 Ultra';
    let price = 1499.99;
    let stock = 90;
    let colors = ['black', 'beige', 'white'];
    let description = {
        weight: '200g',
        size: '6.7 inches',
        camera: '108MP',
    };

    const product = {
        productName, // -> productName: 'Samsung Galaxy S24 Ultra'
        price, // -> price: 1499.99
        stock, // -> stock: 90
        colors, // -> colors: ['black', 'beige', 'white']
        description, // -> description: { weight: '200g', size: '6.7 inches', camera: '108MP' }
    };

////

//// 8. Array Fundamentals

    // A. Property length

    const shoppingCart = [
        { product: 'Laptop HP', price: 899.99, catergory: 'Computers' },
        { product: 'Smartphone Samsung', price: 699.99, catergory: 'Electronics' },
        { product: "Book 'The Alchemist'", price: 14.99, catergory: 'Books' },
        { product: 'Sony Headphones', price: 149.99, catergory: 'Electronics' },
        { product: 'Camera Canon', price: 499.99, catergory: 'Photography' },
    ];

    console.log(shoppingCart.length); // 5

    // B. Accessing elements

    const firstProduct = shoppingCart[0];
    console.log(firstProduct); // { product: 'Laptop HP', price: 899.99, catergory: 'Computers' }

    // C. Modifying elements

    shoppingCart[0].price = 999.99;
    console.log(shoppingCart[0]); // { product: 'Laptop HP', price: 999.99, catergory: 'Computers' }

    // D. Adding elements

    shoppingCart.push({ product: 'Epson Printer', price: 349.99, catergory: 'Printers' });
    console.log(shoppingCart) // 6 elements

////

//// 9. Tour of Arrays

    // A. for loop

    for (let i = 0; i < shoppingCart.length; i++) {
        console.log(`${shoppingCart[i].product} - $${shoppingCart[i].price}`);
        // Features: It is a classic loop that provides more direct control over the array index.
        // Usage: Used to loop through all the elements of an array or any iterable.
        // Operation: A control variable is declared (usually called 'i' by convention) that represents the index of the array.
        // The loop runs as long as the index is less than the length of the array and on each iteration, the index is incremented by one.
    }

    // B. for...in loop

    for (let index in shoppingCart) {
        console.log(`${shoppingCart[index].product} - $${shoppingCart[index].price}`);
        // Features: Iterates over all enumerable properties of an object, including properties inherited from the prototype.
        // Usage: It is mainly used to loop through the properties of an object, but is not recommended for looping through arrays because it could include unwanted properties of the Array.prototype object.
        // How it works: In each iteration, the control variable represents the name of the object's property.
        // This loop does not guarantee a specific order in the iteration, so it is not recommended for iterating over arrays when a specific order is required or unwanted properties of the prototype must be avoided.
    }

    // C. for...of loop

    for (let product of shoppingCart) {
        console.log(`${product.product} - $${product.price}`);
        // Features: Iterates over all enumerable properties of an object, including properties inherited from the prototype.
        // Usage: It is mainly used to loop through the properties of an object, but is not recommended for looping through arrays because it could include unwanted properties of the Array.prototype object.
        // How it works: In each iteration, the control variable represents the name of the object's property.
        // This loop does not guarantee a specific order in the iteration, so it is not recommended for iterating over arrays when a specific order is required or unwanted properties of the prototype must be avoided.
    }

    // D. forEach() method

    shoppingCart.forEach(product => 
        console.log(`${product.product} - $${product.price}`)
        // Features: forEach() is a JavaScript array method that executes a function for each element in the array.
        // Use: It is useful when you want to perform an operation on each element of the array, such as printing them to the console or modifying them.
        // Operation: It does not return a new array, it simply iterates over the elements of the array and applies the provided function to each one.
    );

    // E. map() method

    const newProducts = shoppingCart.map(product => `${product.product.toUpperCase()} - $${product.price}`);
    // Features: map() is a JavaScript array method that creates a new array with the results of calling a function for each element of the array.
    // Use: It is useful when you need to transform each element of the array into something different, such as formatting them in a certain way or performing calculations with them.
    // Operation: Returns a new array without modifying the original array. The provided function must return the desired value for each element of the original array.

    console.log(newProducts);

////

//// 10. Array Methods

    //forEach: The forEach() method of Array instances executes a provided function once for each array element.
    const amazon = ["Comedor","Cocina","Salud y Belleza","Inicio"]
    amazon.forEach((element) => {
    console.log(element);
    });

    //map: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

    const marcas = ["Samsung","Apple","Xiaomi","Sony"]
    const marcasMayusculas = marcas.map((element) => element.toUpperCase());
    console.log(marcasMayusculas);

    //filter: The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    const valorSmartphone = [199,138,95,249,189]
    const valorMayor = valorSmartphone.filter((element) => element > 150);
    console.log(valorMayor);

    //concat: The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    const marcasLaptop = ["HP","Dell","Lenovo","Asus"]
    const marcasTablet = ["Samsung","Apple","Xiaomi","Sony"]
    const marcasElectronicos = marcasLaptop.concat(marcasTablet);
    console.log(marcasElectronicos);

    //find: The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

    const juguetes = ["Juguete de cactus","Magnetic Tiles Kids Toys","Juguete interactivo digital para mascotas","Juego de 80 juguetes sensoriales para ansiedad"]
    const juguete = juguetes.find((element) => element.length > 20);
    console.log(juguete);

    //push: The push() method adds one or more elements to the end of an array and returns the new length of the array.

    const exerciseTools = ["Amazon Basics - Tapete de yoga extragrueso","Push Up Board","WeluvFit - Kit de barra de pilates","Banda de resistencia"]
    exerciseTools.push("Amazon Basics - Mancuerna de entrenamiento")
    console.log(exerciseTools);

    //pop: The pop() method removes the last element from an array and returns that element.

    const auriculares = ["Auricular USB H390","BENGOO G9000 Auriculares","Auriculares Ear Force Recon","NUBWO G06"]
    auriculares.pop();
    console.log(auriculares);

    //includes: The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

    const belleza = ["Beauty of Joseon Revive - Suero para ojos", "e.l.f. Filtro líquido Halo Glow", "Beauty of Joseon Crema Dynasty"]
    const resultado = belleza.includes("Beauty of Joseon Crema Dynasty");
    console.log(resultado);

    //reduce: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

    const preciosBelleza = [16,14,24]
    const total = preciosBelleza.reduce((total, precio) => total + precio, 0);
    console.log(total);

    //unshift: The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
    const televisores = ["INSIGNIA 24-inch Class F20 ","INSIGNIA 50-inch Class F30","VIZIO - Smart TV Full HD 1080p"]
    televisores.unshift("Televisión inteligente Amazon Fire TV","TCL Smart TV Class S3 1080p LED");
    console.log(televisores);

    //shift: The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

    const TVSony = ["Sony 43 pulgadas 4K","Sony 55 pulgadas 4K", "Sony Serie X90L de TV 4K"]
    TVSony.shift();
    console.log(TVSony);

    //join: The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

    const teclados = ["REDRAGON S101 Set combo","MageGee MK-Box - Teclado mecánico portátil","SteelSeries Apex 3 RGB - Teclado para videojuegos"]
    const tecladosString = teclados.join("-");
    console.log(tecladosString);

    //slice: The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.

    const monitores = ["Amazon Basics - Monitor IPS de 27 pulgadas","Monitor curvo FHD VA de 27 pulgadas","Acer KB272 EBI Monitor de oficina","PHILIPS Monitor Full HD de 221V8LB"]
    const monitoresPequeños = monitores.slice(0,2);
    console.log(monitoresPequeños);

    //flatten: The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

    const mouse = ["Mouse para juegos Razer DeathAdder Essential","Logitech G 305 LIGHTSPEED",["Razer Viper V3 Pro Wireless Esports Gaming Mouse","TMKB Falcon M1SE - Mouse ultraligero "]]
    const mousePlano = mouse.flat();
    console.log(mousePlano);

////

//// 11. Array Destructuring

    const categorias = ["Electrónicos","Computadoras","Software","Videojuegos","Ropa","Equipaje"]

    const [a, b, c, d, e,f] = categorias 

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);

////

//// 12. Rest vs Spread

    // A. Destrcuturing with rest

    const electronicos = ["Audifonos","Cámaras","Celulares","Equipos y accesorios"]

    const [g,h, ...rest] = electronicos

    console.log(g); // Audifonos
    console.log(h); // Cámaras
    console.log(rest); // ["Celulares","Equipos y accesorios"]

    // B. Spread

    const videoJuegos = ["Nintendo","Play 4","Play 5"]
    const videoJuegos2 = [...videoJuegos, "Xbox 360","Wii"]
    const videoJuegos3 = ["Xbox One","Nintendo Switch"]
    const videoJuegosTotal = [...videoJuegos,...videoJuegos3]

    console.log(videoJuegos2); // ["Nintendo","Play 4","Play 5","Xbox 360","Wii"]

    console.log(videoJuegosTotal); // ["Nintendo","Play 4","Play 5","Xbox One","Nintendo Switch"]

////