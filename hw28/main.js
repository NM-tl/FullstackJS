document.addEventListener("DOMContentLoaded", () => {
    // Task 1
    {
        const deepFreeze = (obj) => {
            Object.freeze(obj);
            Object.values(obj).forEach(value => {
                if (value && typeof value === 'object' && !Object.isFrozen(value)) {
                    deepFreeze(value);
                }
            });
        };
        
        const fileSystem = {
            name: "root",
            type: "folder",
            children: [
                {
                    name: "folder1",
                    type: "folder",
                    children: [
                        { name: "file1.txt", type: "file" },
                        { name: "file2.txt", type: "file" }
                    ]
                },
                {
                    name: "folder2",
                    type: "folder",
                    children: [
                        { name: "file3.txt", type: "file" }
                    ]
                }
            ]
        };
        
        deepFreeze(fileSystem);
        
        // test
        // fileSystem.name = "newName";
        // fileSystem.children[0].name = "newName";
        // console.log(fileSystem)
    }
    // Task 2
    {
        function daysBetweenDates(date1_str, date2_str) {
            const diffInMs = Math.abs(new Date(date2_str) - new Date(date1_str));
            return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        }
        
        // const date1 = "2024-03-12";
        // const date2 = "2024-03-20";
        // console.log(`Кількість повних днів між ${date1} і ${date2}: ${daysBetweenDates(date1, date2)}`);
    }
    // Task 3
    {
        function calculateAge(dateOfBirthStr) {
            const DOB = new Date(dateOfBirthStr);
            const today = new Date();
            
            let age = today.getFullYear() - DOB.getFullYear();
            if (today < new Date(today.getFullYear(), DOB.getMonth(), DOB.getDate())) {
                age--;
            }
            
            return age;
        };

        // console.log(`Поточний вік: ${calculateAge("1996-01-01")}`);        
    }
    // Task 4
    {
        function calculateTimeUntilFutureDate(futureDateStr) {
            const futureDate = new Date(futureDateStr);
            const currentDate = new Date();
            
            if (futureDate <= currentDate) {
                return "Невірна дата: введіть майбутню дату.";
            }
        
            const timeDiff = futureDate - currentDate;
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
            return `${days} днів, ${hours} годин, ${minutes} хвилин, ${seconds} секунд`;
        };
        
        // const futureDate = "2024-03-19T00:00:00";
        // console.log(`Час до майбутньої дати: ${calculateTimeUntilFutureDate(futureDate)}`);    
    }
    // Task 5
    {
        function calculateWorkingDays(deadline) {
            let workingDays = 0;
            const currentDate = new Date();
            
            while (currentDate.getTime() < deadline.getTime()) {
                if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                    workingDays++;
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
        
            return workingDays;
        }
        
        // const projectDeadline = new Date('2024-03-31');
        // console.log(`Кількість робочих днів до терміну здачі проекту: ${calculateWorkingDays(projectDeadline)}`);
    }
});
   