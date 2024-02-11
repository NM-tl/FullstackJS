document.addEventListener('DOMContentLoaded', () => {
    /* NaNami render */

    let str = "ami";
    str = "NaN" + "ami";
    console.log("Task1 result:" + str);

    const area1 = document.querySelector('.task1');
    area1.innerHTML = str;

    /* Fake store + render */

    const store = [
        {
            name: 'Sukuna',
            nickname: 'Overlod',
            phone: '+0999999999',
            email: 'sukuna.inc@gmail.com',
            sex: 'male',
            hobby: 'eat fingers',
            season2: true,
            img: 'https://img.wattpad.com/a3e91199fa116dcd6d43ca90b2270d5ffc1fa1e7/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6e6341386f6c52566639647a41773d3d2d313036393334313939352e313637653636313365386132633734313133323631323439303538312e676966',
        },
        {
            name: 'Gojo Satoru',
            nickname: 'God',
            phone: '+0777777777',
            email: 'strongest.inc@gmail.com',
            sex: 'male',
            hobby: 'pathos, god complex, jokes',
            season2: true,
            img: 'https://www.gifcen.com/wp-content/uploads/2022/04/gojo-gif-9.gif',
        },
        {
            name: 'Yuta Okkotsu',
            nickname: 'YutaXRika',
            phone: '+0222222222',
            email: 'rika2ghost@gmail.com',
            sex: 'male',
            hobby: 'dont sleep judging by the circles in eyes',
            season2: false,
            img: 'https://i.pinimg.com/originals/2b/47/dd/2b47dda4a47e399de34e6a004189f6c0.gif',
        },
    ];

    console.log(store);

    const area2 = document.querySelector('.task2');

    if (area2) {
        area2.innerHTML = store.map((person) => {
            const { name, nickname, phone, email, sex, hobby, season2, img } = person;

            return `
                <div class="flex w-full flex-row-reverse justify-between items-center gap-5">
                    <img 
                        src=${img}
                        alt='avatar'
                        class="max-w-md rounded-md shadow-lg"
                    >
                    <div class="flex flex-col gap-1">
                        <span class="flex gap-1"><span class="font-bold">Name:</span> ${name}</span>
                        <span class="flex gap-1"><span class="font-bold">Nickname:</span> ${nickname}</span>
                        <span class="flex gap-1"><span class="font-bold">Phone:</span> ${phone}</span>
                        <span class="flex gap-1"><span class="font-bold">Email:</span> ${email}</span>
                        <span class="flex gap-1"><span class="font-bold">Sex:</span> ${sex}</span>
                        <span class="flex gap-1"><span class="font-bold">Hobby:</span> ${hobby}</span>
                        <span class="flex gap-1"><span class="font-bold">Season 2:</span> ${season2 ? 'Season 2' : 'Not appear'}</span>
                    </div>
                </div>
            `;
        }).join('');
    }
});


