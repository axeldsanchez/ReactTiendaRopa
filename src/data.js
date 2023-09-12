const data = [
    {
        id: 1,
        name: "Remera Nike",
        price: 15000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Remeras",
        stock: 10
    },
    {
        id: 2,
        name: "Remera Puma",
        price: 11000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Remeras",
        stock: 5
    },
    {
        id: 3,
        name: "Remera Adidas",
        price: 14300,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Remeras",
        stock: 15
    },
    {
        id: 4,
        name: "Remera Topper",
        price: 10000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Remeras",
        stock: 6
    },
    {
        id: 5,
        name: "Jean Azul",
        price: 12000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Pantalones",
        stock: 10
    },
    {
        id: 6,
        name: "Gabardina Negro",
        price: 10600,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Pantalones",
        stock: 17
    },
    {
        id: 7,
        name: "Gabardina Azul",
        price: 10600,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Pantalones",
        stock: 11
    },
    {
        id: 8,
        name: "Gabardina Verde",
        price: 6200,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Pantalones",
        stock: 12
    },
    {
        id: 9,
        name: "Camisa Rallada",
        price: 7500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Camisas",
        stock: 2
    },
    {
        id: 10,
        name: "Camisa a cuadros",
        price: 8500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Camisas",
        stock: 9
    },
    {
        id: 11,
        name: "Camisa Blanca",
        price: 7000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Camisas",
        stock: 14
    },
    {
        id: 12,
        name: "Camisa Jean",
        price: 13200,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Camisas",
        stock: 6
    },
    {
        id: 13,
        name: "Sweater Negro",
        price: 10000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Sweaters",
        stock: 4
    },
    {
        id: 14,
        name: "Sweater Azul",
        price: 11200,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Sweaters",
        stock: 9
    },
    {
        id: 15,
        name: "Sweater Verde",
        price: 11600,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Sweaters",
        stock: 2
    },
    {
        id: 16,
        name: "Sweater Rojo",
        price: 9600,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Sweaters",
        stock: 1
    },

]

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(data)
        }, 2000)
    })
};

export const getItem = (itemId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const newItem = data.filter((item) => item.id === itemId);
            if (newItem) {
                resolve(newItem)
                }
                else {
                    reject("No se encontró item");
                }
        }, 2000)
    })
};

export const getItemCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const newCategory = data.filter((item) => item.category === categoryId);
            if (newCategory) {
                resolve(newCategory)
                }
                else {
                    reject("No se encontró item");
                }
        }, 2000)
    })
};