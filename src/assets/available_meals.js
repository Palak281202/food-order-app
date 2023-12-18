import beeftacos from '../assets/beeftacos.jpg' 

const AVAILABLE_MEALS = [
    {
        id: "m1",
        name: "Pav Bhaji",
        price: "99",
        description: "Featuring a medley of mashed vegetables served with buttery pav, pav bhaji.",
        image: "https://cdn.gencraft.com/prod/user/2a69f15a-2a8c-474f-b082-804e3c50be88/043e78a1-b960-4942-8298-2a14840ca705/image/image1_0.jpg?Expires=1703001140&Signature=brrsWDwzveI184~bAxGoXY60cM9QEwedbMkH~gu-A51tmIDvp~fNKkv5KoiPi8MAvGWoi~zo4m0XxZjB69xfpoy88wxOyRfSvSjJuqEaoVqCnRrLNr1wtX-z5RFEf2TXkialQ5-wGt53D98vTqds2zBThyOJjCzXFS9asbuzhXTR--7tY8Ea81d8B7THi-B8QuupvUusstmRH22UmzeAEkfZ2UuMBaQhOXDdhoGmu9~iWABWkVOde6UIHs8aB~YVxZnDBswKrnEsnhzkTTimULfmTD90Y93JDHvv3ZBGTGVpCoL2jbdGHbSERaw2iaHCXB~sKmS-3FtjIzkHy8~7zQ__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        id: "m2",
        name: "Chole Bhature",
        price: "149",
        description: "Combination of spiced chickpeas (chole) and deep-fried, fluffy bread (bhature), creating a satisfying and indulgent culinary experience..",
        image: "https://cdn.gencraft.com/prod/user/2a69f15a-2a8c-474f-b082-804e3c50be88/ca1137a5-c816-4e86-9c23-628ac7e74c83/image/image1_0.jpg?Expires=1703001498&Signature=o2q1l7RGtJOhYsp1IO2ZZB3YfGr7EuFiqBsZlSbOyTrN42zpIHVHGmM8P02iZ-N5qK4XNNGpjrCzlTwWEAbfvQR3mvXpL7oOdKDChHQmUpU7kvvDMPU6ugq4uS9e501m88CSW1J4hRyoQBXc80E6uFTjvyoskCC4AbCKtBOQ0XTuhLS92eXP9Ov4RkOMmMu2gAI3zCyJIRrg7PkCpXtFDQzymwQTiEMtr1egR~RG~1UmNy9ZGTQs4iwo8S-Yc~xTAM66gaU8Xw1tHsbUzsZzU35CqTcRxduENCqyvMTSjuruHQVC0GuiMcpbLFZMGZGdtK0AjnD2tsSVQCjFpIBe7w__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        id: "m3",
        name: "Shahi Panner",
        price: "129",
        description: "Succulent cubes of paneer (Indian cottage cheese) in a rich and aromatic tomato-based gravy, exuding royalty in every flavorful bite..",
        image: "https://cdn.gencraft.com/prod/user/2a69f15a-2a8c-474f-b082-804e3c50be88/a340fe0d-b3a5-4440-8375-ba8fc47b4d5c/image/image1_0.jpg?Expires=1703001931&Signature=YUv96u5YtRwDUS2QoucPeinovwYANjrYA7PWDy8vjyQj7NklcNU7F0nbhOfdDxFZeGx2c8Siag9GEwAq7O39OWDBzFKCtQ9UpTBBGNKCZwALsVsdwuLu4UJYWMO9qvg9bUshGsGtDuCwmn4ycnYuGy3zjdZtvtzts5PbgL8gtZag~W68L3BtZsEFyKKIQeT7gJy5JgvwmqAusONR6suOlkSk8kX7-qwf5YvXwq0zfqi2GUwiykUOSnLj9Jvy4X2VCqRr046yAeoVqDrrqExFwygpTrdRNwYbdC~zNXMgElosrsNW~CnrUL~RlOUeNgX3oMI6dTEBLmh6Jw2iK6P-bQ__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        id: "m4",
        name: "Roti",
        price: "10",
        description: "Unleavened flatbread made from whole wheat flour, expertly cooked on a griddle.",
        image: "https://cdn.gencraft.com/prod/user/90a2bddd-06db-4d6d-af05-248368b3a3e5/4663e3b4-38eb-4519-9f84-70dd280681b8/image/image0_0.jpg?Expires=1703002383&Signature=M6XgEIW33eRd6WabOc2726keFTs1ggqEEIjcFwy1W95YWEzxBD6Ud0loGMPbe0IEbZ~5ps9PXsExHXVBG-d2DqH8NT~TAM8gwGlMhqz74VZ54AOS3gGDX5iwqUFQ2RHhuLKoV15k9~S4aTwVqtHOR~PMqOn~lOVjm5srF50NUqYWTJ0dVSifPg8mk5soB-Rt165cGcnYGnKC7Q7sPZeNh1NFhzPdxnlVhPYHPc94Qbd-fcbFamAM7cGxPbAAcIQQfZ0gcYMi2HgFg~05mUz6TunwLSz-Q8RkfWIwHDttG6Nxml2Ate4xAN5-bcpGYLJyYRA9VAnkQS44bRQUA5wX0g__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        id: "m5",
        name: "Fried Rice",
        price: "119",
        description: "Cooked rice is stir-fried with a medley of vegetables, proteins, and seasonings",
        image: "https://cdn.gencraft.com/prod/user/90a2bddd-06db-4d6d-af05-248368b3a3e5/410c8469-05ee-4169-9ca6-1692dd304a45/image/image1_0.jpg?Expires=1703002424&Signature=Z7stNKiLcgDuiILcTDJDgdw0jnkbZ-F5Yg3fs0iSiqFApZeWieq76vr25b7D1jhFtglfChNwpH9vBdMe9Hf-SHM974A4I6FtmJ~tRM0JpttgjAF874X5qhduywJi2Q2Dw34x82F5HOypXCq3OhzIpg~hzqg5RsjNCMbBPZ1jn8Wbi5yiYi96huLNaQWR3xk-BvwHhF5IiL8O2z-tSgpr3EjLNWFDLiHo8x20so96~vt2r6En0aOMKoGFeIw6v9vjDkH9jO31j3Yp-UjQ~ETTHI8mih0cFPXpdvT4Ft-uCAm1E-KaMilrTMn1KNlw7TfhO8TR4ly-L-~eXvRw8CiE1A__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        id: "m6",
        name: "Laccha Parantha",
        price: "29",
        description: "Flaky and multi-layered Indian flatbread, expertly prepared by folding and rolling the dough, resulting in a deliciously crispy and golden-brown bread ",
        image: "https://cdn.gencraft.com/prod/user/90a2bddd-06db-4d6d-af05-248368b3a3e5/21bcbd48-5df7-4d0b-a06a-3e9778b44d3d/image/image1_0.jpg?Expires=1703002504&Signature=oMR-zCg2veChmQKDI2bsMgk7UmSFGkSIwRik-YXMIAsf2~QXcgdSkOYFJtapIDwMrS3ZpGjJYAHnsO9G3ETPGa~KsMY0e6yIIBe98AsrNDFsBTuyX9yUg6wOS8pQ7bXxuxeCG~oFjcD6KCZvO-clw6uuNAIG~3qlhmnjeOa1GC6sK-23DEfv4FCq~EdTu7S40c55f-9DC4Mwexi5ErW5pC-LkOgGlmVBwsYzk0YVmhdHpg4WMLht3whQsTQFZWjAF40YQrz40ZZxvyPNXVXq9umLM8ciXALU~~Gx7SQTf2~t0dL-GK6Qq24qeIrff12fGXFR16ix-uEsQkYsnbv07w__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        id: "m7",
        name: "Chicken Biriyani",
        price: "179",
        description: "Chicken pieces are layered with aromatic basmati rice, infused with a blend of spices and herbs, creating a delightful and flavorful one-pot feast.",
        image: "https://cdn.gencraft.com/prod/user/90a2bddd-06db-4d6d-af05-248368b3a3e5/213cd2f6-8b2e-4111-9f3f-ea5943139934/image/image1_0.jpg?Expires=1703002609&Signature=YIHO7LxopiirBUdF5UuTM-oSwJuCTNpz6C7yu52uIMi8MAFZiY5KBoraNG6E9l6GTziUwWk1Jzbzkz-SCe41w5EWNuc1kJPLiHSe64KN~yO2tJcYdXNyzKCDRkSXQjx317Cr1Xaw9xZ7KbpnNKxJM5KPOtmYY7vGPix3HM9ZvpTex9SH8wHoLMVGAWsVcpAwevFnaKgKdZS7HCXpPdDpOHAqYowB2mwunmV1eLh2CoA2CjouMnx1mAEWNNU2nap7ox-lEinliqIa0NMjah7tgjj7rRrUGBVtnvnRGsCZZzGN2y2lLvi-oUSf3WON3PnMOqhoKJt3K~38JDdHYpTh8A__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        id: "m8",
        name: "Masala Dosa",
        price: "119",
        description: "Thin and crispy fermented rice and urad dal crepe filled with a spiced potato mixture, served with coconut chutney and tangy sambar.",
        image: "https://cdn.gencraft.com/prod/user/90a2bddd-06db-4d6d-af05-248368b3a3e5/1f2802b2-7bb7-4b33-845a-d89167bc4b26/image/image1_0.jpg?Expires=1703003037&Signature=oM~utwQLTd3sZOyaLc5u219gEnBoQIEaI4-MYubN3vuNo386JY6r0Fx8LrDZc4suRwJ0QqGyeOlpuG03kP2s1DnKEqhsbqkpTerpVN7oY2sRTYLxzrxVe7fUW9p3F2FAQLxrPVBKSgovKLKowFkXhWJ3UabgAhzJm1M2ReO4uQB21jT8Czi0LphJBEdpMAIIVQunoAhT0dKbkpiwZUXOfK2-leqPRSACOdjAWNDZTqMmjq4JBiRlxUmAvlCLVdE-tb8KW7nEFelugIQIXBhWPiTGWSqumgElvM5RNKur~htGr-sNPWYZZDJKciGHVjIWwIM3tYVK86Wf3QtgHeF6DQ__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        id: "m9",
        name: "Alfredo Pasta",
        price: "169",
        description: "Creamy and indulgent white sauce made with butter, heavy cream, and Parmesan cheese, generously coating perfectly cooked pasta for a rich and comforting dining experience.",
        image: "https://cdn.gencraft.com/prod/user/90a2bddd-06db-4d6d-af05-248368b3a3e5/7ccd1687-938b-4810-8f0a-520ac1a56a12/image/image1_0.jpg?Expires=1703002847&Signature=pmoSwhgdlm38lctvWvLTfeWBA9X4bzXBqVvf~RanxGBZsieekXwIANZJMWKktI-ziQB5Slkb9ahg~lZc1GQ~ZXQeoHaOZH2x5Fki4MS-~WOYt9ANlonA1xkLSLyvVr~R6A~PrRQ5JL~zfQcJc~g3XcQfuQOS6RVG-J5E1f1DO9WsYOhq7s07j-OHH4QcRZJbn15qyWi89bvxPD4ID6Oe-bwBc9dyjjShmsq~HXHCFDQX-Xfy4o3tiCLOZRjA31i7MdrYMogLWFbWtpx5WsdzdRvOSaVoFBXCZCmyXXUi3I0cA4fRe1XCrH14BtGe3gcih86ZAeP1FiwP1OmbUOBR8A__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        id: "m10",
        name: "Veggie Burger",
        price: "49",
        description: "A juicy veggie patty served on a whole grain bun with lettuce, tomato, and a tangy sauce.",
        image: "https://cdn.gencraft.com/prod/user/90a2bddd-06db-4d6d-af05-248368b3a3e5/7965d113-bc5b-4784-ae3e-ce37a1104903/image/image1_0.jpg?Expires=1703002890&Signature=GSnWg5x4PFgzS0c0bxDhlfOqjWLRD3f5cJH9vKF6d4LCPVbywIofOPFJQVbK1qK~IoOvYrCTbwn-fGK2Gj-EmnJZCzDeChCdgx46Rc8cqs9-qOqoermApd~CUEAKq9lnxCZkdHpen3Zb0dSNm0hrKQ6395k8aTePxeDh5xtTbuRfWOKtWbub44NNZYI46z2Hi~vL0a~5iMNejpD2e-cA1hdzy9pfrni7Yex6z6dHrkm76AMF67-3XEw9FK-5ls-cbuxvbZifN-DgS7kd6TNpsPvph9Yjm7I0DVHnruFTxc5SeIfFadumw0jJYPFlWD7Ir22iSrDHg0hO9Wq4wEJGdw__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        id: "m11",
        name: "Mac & Cheese",
        price: "139",
        description: "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
        image: 'https://cdn.gencraft.com/prod/user/2a69f15a-2a8c-474f-b082-804e3c50be88/b405769f-9bf8-4cbb-9806-5e05a3c7323d/image/image1_0.jpg?Expires=1703001073&Signature=q7Et~MAHrlfLYG4KvmYgMYdLllPdSaosHAouDw5EwpH9EBgzeDRzvIytCKDlhviIwKuB0ROwtOKooKUxevQb1sguDdsqjP5TK-Gq6MiA4krf-TuEqeGkuUDJz-lyLACaiBzG8hVSS4qVZDAYENQSULuu9HsgUqBGO-FnM9SCRMEy3EomDEKXKyNp1OIEFLGxkyJbUAkmg6IGzjhksIuW~z3v7W42czDYPAfrJpRbaqHxvSF0pMKpQxt1CQKzoOZX7~Mw0B4CsUJ3bEy45u5eIQ-Ty98XtTMC-lqmbP0TuFSqdpYP2wfrXslI0~DFe9Vv3fX3ds1YD~XD-sr9eotVBA__&Key-Pair-Id=K3RDDB1TZ8BHT8'
    },
    {
        id: "m12",
        name: "Margherita Pizza",
        price: "199",
        description: "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",
        image: 'https://cdn.gencraft.com/prod/user/2a69f15a-2a8c-474f-b082-804e3c50be88/be46d551-d9ec-4d9b-b0d9-6f3fbac07084/image/image1_0.jpg?Expires=1703000973&Signature=eI8IlBPuAJAr4YtNmuor6uZ0aWuLTylnB9vEKbE7sqvahxf9QMpF2q28Hh117SKmGgK2e-QEwSpO5uoQz8s22XmRvxXHDuFNRyd7uY-3AgUGQvKESJUo-YYzKqmYdt~UVLZBPJ1sGo0BEdr092CoITcOiu9RDnzlCTj0pHpQOBMJZgGfavRTY19Syvk23LB-0Fqrz1bbLZXFlbgwQ1rT~S6GdkmecJaf2pj78wxtAyIHjszNn4Gjv5AcQLhDJX0GbbaD0Dmy2AY8aVyxdXvVfS5ij0XNhA-BiVuopzG5riqwJ3cA8FUDv5xzSomBp-BiqvMuPA6kHmHAJCXdl8WgiQ__&Key-Pair-Id=K3RDDB1TZ8BHT8'
    },
    {
        id: "m13",
        name: "Pancake Stack",
        price: "139",
        description: "Fluffy pancakes stacked high, drizzled with maple syrup and topped with fresh berries.",
        image: "https://cdn.gencraft.com/prod/user/2a69f15a-2a8c-474f-b082-804e3c50be88/5f142f3f-b1f2-4377-9b6b-a8c7008a0188/image/image1_0.jpg?Expires=1703001421&Signature=k6Fb2vgQ0rgj4ue0lAE8wjzbTQ20Xru0KzU0IPCxhMaeY-QGqdAyIJL55lMwZBeV1hh21PzYrQv7qhiLaAKPr834kobkGX5UCXKW0VX~h0iFQMLZf-LrOVgNIHuCbx7rG9hmKG32tbskrDNuNzNU7lHJS74p7FSPDxytr37FtKce7EF3O6cYjO5jEemkpoHiz00DFirTaNoY8aPOB~p4sS88C3ZxRXv0~ue564G4CtpPuVSyCLd5Yo8A-HOSJPGDva4qiDF2ajNG9WOSh6Iy17KOXkb9vY7GrFlcLB6RYSafdhs5s1lWve0GhciQD5Z3lREJzC7o46A5CDr1iOjFrQ__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        id: "m14",
        name: "Chocolate Brownie",
        price: "99",
        description: "A rich and fudgy brownie, topped with a scoop of vanilla ice cream and chocolate sauce.",
        image: "https://cdn.gencraft.com/prod/user/90a2bddd-06db-4d6d-af05-248368b3a3e5/6c823fbf-5d50-4371-8970-17c8b680667d/image/image0_0.jpg?Expires=1703002966&Signature=BrxcntSTy7N-4iipN9x0wrVafSysGejzrsLX5IUzwMTej7DC3RWU1cjW3PeE55rOWgQGqcxv3coNpngBKCpdy0ZueL3IiKUVPQS59gs-kbCXv35Usvt79t2OGQhjrAW2bwXVtKFUhNsqrAPmf4Gse5ed229tEmHrnY4QRlQFnVq-Dy3oOXNXZR6PcmLFHscNxwRV0TyboLknp~ckEG9PDyOg~xtxuPWMY5hlijb7TQaOe117lFosaXys6iMBraJNuDpfZ1nRMxvXDaAhdvef8tIF439FvP61~4XPVikCJIDLByoXUEckk6rikVkcfigiOZ59TOo8SP~jXgJ2iMsfqA__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        id: "m15",
        name: "Strawberry Cheesecake",
        price: "149",
        description: "A creamy cheesecake with a strawberry flavor, served on a crumbly biscuit base.",
        image: 'https://cdn.gencraft.com/prod/user/2a69f15a-2a8c-474f-b082-804e3c50be88/7fd92e7d-b3b3-481a-ae25-ff9ada8e4856/image/image1_0.jpg?Expires=1703000676&Signature=JkKrIcTCfgLdR8R0r1BBUb~dOzMpifq1e12VdI3RlMEQvY8fbrlEWC1lbA6h2GMpDlS0-msYsCu3eWF9byFY2hMvG1egy7IK~fE9wEYlOdeHC8lWMC30WJ3QCniBEpDCYI7uWcKD4QznUUmI51TnhhwxC8tsMoLlLYtq8m9Vm-QTvFfpWHzbO8NjBlK3eQhSgvQbRpqwRAbJgx0V0QDSnnun~SNZvIt2h5lsPY72faKH5MhcB3-2AmSbpR4PfJe~4T6Qn0biDtllapAkab-93aJE0gpJUsx2AA1cGMoii~Z7rPI7GC1mv1YygY1C10cRkM-zdkLgFTWLInPWr4VMwQ__&Key-Pair-Id=K3RDDB1TZ8BHT8'
    },
    {
        id: "m16",
        name: "Gulab Jamun",
        price: "49",
        description: "Featuring deep-fried milk-based dumplings soaked in a fragrant sugar syrup, offering a heavenly combination of sweetness and melt-in-your-mouth texture..",
        image: "https://cdn.gencraft.com/prod/user/2a69f15a-2a8c-474f-b082-804e3c50be88/9bc98b2d-1a82-46be-80e5-e047407afdc6/image/image1_0.jpg?Expires=1703001557&Signature=YssikGy6BgI3pq2M2HuGIgPhvqZT48WwAMtg~DOB6MvOZfG4MYZwiRN3HJTU9Te-FkU~egctWMmwWxn5Y0orU6jr6BrENkuVeRAG8e-XWMT3NP74BUKineno8uK81cXUhkUh9vU3nTCUbOvQCjYNuvnD2ns7Ho-PSDhbvSa1XnyYkqeZ7rOWv5WJl88JwW8pYVHfVGu-BWuj1F0gM3jFTs8aUlcyH~oY0WOKPuwxUAtG1s-MMx1v65WhqjLVdSIW5M~KHymSN8ag-czmH3SUhshdkzHDvQTUn44XJ4ksaVJk3feBaIsFKvoLwlofZn7bUnRcjLcfNhTaCC7uvBYyjA__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
]

export default AVAILABLE_MEALS;