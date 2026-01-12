function Microwave(item, time) {
    return new Promise((resolve, reject) => {
        // ถ้าไม่ใส่เวลา หรือเวลาน้อยกว่า 1 = error
        if (!time || time < 1) {
            reject("Error: กรุณาใส่เวลาอย่างน้อย 1 วินาที");
            return;
        }

        // นับถอยหลัง
        let count = time;
        let timer = setInterval(() => {
            console.log(count + "...");
            count--;

            if (count < 0) {
                clearInterval(timer);
                resolve("Cooked " + item);
            }
        }, 1000);
    });
}

async function cookFood() {
    console.log("We are microwaving food");

    let result = await Microwave("Pizza", 3);
    console.log(result);

    console.log("We've got our food");
}

cookFood();
