const { pool } = require('./src/configs/connectDB')
const dateTime = require('./src/services/getDateTime')

const data = [
    {
        "id": "recZkNf2kwmdBcqd0",
        "title": "accent chair",
        "price": 25999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
        "colors": [
            "#ff0000",
            "#00ff00",
            "#0000ff"
        ],
        "supplier_id": 1,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 5,
        "shipping": true
    },
    {
        "id": "recEHmzvupvT8ZONH",
        "title": "albany sectional",
        "price": 109999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52",
        "colors": [
            "#000",
            "#ffb900"
        ],
        "supplier_id": 2,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 6
    },
    {
        "id": "rec5NBwZ5zCD9nfF0",
        "title": "albany table",
        "price": 309999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f",
        "colors": [
            "#ffb900",
            "#0000ff"
        ],
        "supplier_id": 2,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 7
    },
    {
        "id": "recd1jIVIEChmiwhe",
        "title": "armchair",
        "price": 12599,
        "image": "https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f",
        "colors": [
            "#000",
            "#00ff00",
            "#0000ff"
        ],
        "supplier_id": 1,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 8,
        "shipping": true
    },
    {
        "id": "recoM2MyHJGHLVi5l",
        "title": "bar stool",
        "price": 4099,
        "image": "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66",
        "colors": [
            "#000"
        ],
        "supplier_id": 2,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 9,
        "shipping": true
    },
    {
        "id": "recotY5Nh00DQFdkm",
        "title": "dining table",
        "price": 42999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/7a38cf782907773d9900165530cfa583/d9f41960",
        "colors": [
            "#00ff00",
            "#0000ff",
            "#ff0000"
        ],
        "supplier_id": 4,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 9,
        "shipping": true
    },
    {
        "id": "rec1Ntk7siEEW9ha1",
        "title": "emperor bed",
        "price": 23999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b",
        "colors": [
            "#0000ff",
            "#000"
        ],
        "supplier_id": 4,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 8,
        "shipping": true
    },
    {
        "id": "recNZ0koOqEmilmoz",
        "title": "entertainment center",
        "price": 59999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af",
        "featured": true,
        "colors": [
            "#000",
            "#ff0000"
        ],
        "supplier_id": 3,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 6,
        "shipping": true
    },
    {
        "id": "recrfxv3EwpvJwvjq",
        "title": "high-back bench",
        "price": 39999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f",
        "featured": true,
        "colors": [
            "#000",
            "#00ff00"
        ],
        "supplier_id": 4,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 5,
        "shipping": true
    },
    {
        "id": "recoW8ecgjtKx2Sj2",
        "title": "leather chair",
        "price": 20099,
        "image": "https://dl.airtable.com/.attachmentThumbnails/d3174ad774fc628e1d50b77e3bec399f/1de7b97a",
        "colors": [
            "#ff0000",
            "#ffb900",
            "#00ff00"
        ],
        "supplier_id": 3,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 8
    },
    {
        "id": "recEOA6qtDag1hRbU",
        "title": "leather sofa",
        "price": 99999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/a2f371071cf292badbb621294758b600/ca963b31",
        "colors": [
            "#00ff00",
            "#0000ff"
        ],
        "supplier_id": 3,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 5
    },
    {
        "id": "recoAJYUCuEKxcPSr",
        "title": "modern bookshelf",
        "price": 31999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094",
        "featured": true,
        "colors": [
            "#ffb900",
            "#ff0000",
            "#00ff00"
        ],
        "supplier_id": 3,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": "kids"
    },
    {
        "id": "recQ0fMd8T0Vk211E",
        "title": "modern poster",
        "price": 3099,
        "image": "https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359",
        "colors": [
            "#000"
        ],
        "supplier_id": 2,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 6,
        "shipping": true
    },
    {
        "id": "rec7CjDWKRgNQtrKe",
        "title": "shelf",
        "price": 30999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/2fd8fb02cc6fa5620504de41fbb662f9/3157a507",
        "colors": [
            "#00ff00"
        ],
        "supplier_id": 4,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 6
    },
    {
        "id": "recF0KpwlkF7e8kXO",
        "title": "simple chair",
        "price": 109999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/c9d46754faf94d2283e15ac3b8accb9a/a6c343c8",
        "colors": [
            "#0000ff"
        ],
        "supplier_id": 2,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 6,
        "shipping": true
    },
    {
        "id": "recs5BSVU3qQrOj4E",
        "title": "sofa set",
        "price": 129999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/fe9d4f25fee307f6ae5b7a462b70b942/031464c4",
        "colors": [
            "#00ff00",
            "#ffb900"
        ],
        "supplier_id": 1,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 6,
        "shipping": true
    },
    {
        "id": "recroK1VD8qVdMP5H",
        "title": "suede armchair",
        "price": 15999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/1cf03bfcee117bd92273d996a82a1534/47ef57c7",
        "colors": [
            "#ffb900"
        ],
        "supplier_id": 3,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 5
    },
    {
        "id": "rec7JInsuCEHgmaGe",
        "title": "utopia sofa",
        "price": 79999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/5ebc46a9e31a09cbc6078190ab035abc/8480b064",
        "featured": true,
        "colors": [
            "#ff0000",
            "#00ff00"
        ],
        "supplier_id": 2,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 6
    },
    {
        "id": "rec3jeKnhInKHJuz2",
        "title": "vase table",
        "price": 120999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/1e222e36e935db2695c33e3d30c2e482/91b542e0",
        "featured": true,
        "colors": [
            "#ff0000"
        ],
        "supplier_id": 1,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 5
    },
    {
        "id": "recv2ohxljlK2FZO7",
        "title": "wooden bed",
        "price": 250099,
        "image": "https://dl.airtable.com/.attachmentThumbnails/1d692023f254ca11a3d1a3628d198081/e922a771",
        "colors": [
            "#000",
            "#ffb900"
        ],
        "supplier_id": 4,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 8
    },
    {
        "id": "recJIjREF3dlFi3sR",
        "title": "wooden desk",
        "price": 150999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e3fa7aa6dc112c4998da18bb401bd70f/61e2fb5e",
        "colors": [
            "#0000ff",
            "#00ff00"
        ],
        "supplier_id": 4,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 5,
        "shipping": true
    },
    {
        "id": "recm7wC8TBVdU9oEL",
        "title": "wooden desk",
        "price": 40099,
        "image": "https://dl.airtable.com/.attachmentThumbnails/954dfa5c8ce3df84a3c7254481464366/a3bd8c4a",
        "colors": [
            "#0000ff",
            "#00ff00"
        ],
        "supplier_id": 4,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 5
    },
    {
        "id": "rectfNsySwAJeWDN2",
        "title": "wooden table",
        "price": 234999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e8c2f821d05b9e4e5aa450a19e62ffa5/271fc3f5",
        "featured": true,
        "colors": [
            "#ffb900",
            "#ff0000"
        ],
        "supplier_id": 3,
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": 7,
        "shipping": true
    }
]

let a = data.map((item) => {
    return item
})
let auto = async () => {
    try {
        for (let i = 12; i < a.length; i++) {
            await pool.execute(`insert into product(category_id, title, price, discount, image, description, supplier_id, shipping, created_at) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [a[i].category, a[i].title, a[i].price, 0, a[i].image, a[i].description, a[i].supplier_id, 0, dateTime.getDateTime()])
            console.log('Create product successfull')
        }
    } catch (error) {
        console.log(error);
    }
}

let insertColor = async () => {
    try {
        for (let i = 12; i < a.length; i++) {
            console.log(`product ${i + 1}`);
            for (let j = 0; j < a[i].colors.length; j++) {
                await pool.execute(`insert into product_color(product_id, color_code) values (?, ?)`, [i + 1, a[i].colors[j]])
                console.log(`color ${a[i].colors[j]}`);
            }
        }

    } catch (error) {
        console.log(error);
    }
}

insertColor()
