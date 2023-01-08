function makeArray() {

    let container = document.getElementById("visual-array");
    let nums = document.getElementById("take-input").value;
    let numbers = nums.split(" ");

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = parseInt(numbers[i]);
    }

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        let newEle = document.createElement("div");
        newEle.classList.add("bar-block");

        newEle.style.height = `${num * 10}px`;
        newEle.style.transform = `translate(${(i * 65) - 300}px)`;

        let newEleLabel = document.createElement("label");
        newEleLabel.classList.add("bar-block-label");
        newEleLabel.innerText = num;

        newEle.appendChild(newEleLabel);
        container.appendChild(newEle);
    }

    let maxEle = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxEle) {
            maxEle = numbers[i];
        }
    }

    let countArray = new Array(maxEle + 1);

    let countContainer = document.getElementById("freq-array");
    for (let i = 0; i < countArray.length; i++) {

        let blockArray = document.createElement("div");
        blockArray.classList.add("freq-count-array");

        blockArray.style.height = '30px';
        blockArray.style.transform = `translate(${(i * 65) - 300}px)`;
        
        let blockCount = document.createElement("label");
        blockCount.classList.add("freq-count");
        blockCount.innerText = 0;

        let blockIndex = document.createElement("label");
        blockIndex.classList.add("freq-count-array-index");
        blockIndex.innerText = i;
       
        blockArray.appendChild(blockCount);
        blockArray.appendChild(blockIndex);
        countContainer.appendChild(blockArray);       
    }
}

async function countSort(d = 1000) {
    let barBlocks = document.querySelectorAll(".bar-block");
    let barLabel = document.querySelectorAll(".bar-block-label");
    let freqArray = document.querySelectorAll(".freq-count-array");
    let freqCount = document.querySelectorAll(".freq-count");
    let freqArrayIndex = document.querySelectorAll(".freq-count-array-index")

    for (let i = 0; i < barBlocks.length; i++) {
        barBlocks[i].style.backgroundColor = "red";

        let value = barLabel[i].innerText;

        freqArray[value].style.backgroundColor = "darkgoldenrod";
        freqCount[value].style.color = "white";

        await new Promise((resolve) => 
            setTimeout(() => resolve(), d)
        );
        
        freqCount[value].innerText++;

        await new Promise((resolve) => 
            setTimeout(() => resolve(), d)
        );

        barBlocks[i].style.backgroundColor = "purple";
        freqArray[value].style.backgroundColor = "darkgray";
        freqCount[value].style.color = "black";

    }

    let index = 0;
    for (let i = 0; i < freqArrayIndex.length; i++) {
        freqArray[i].style.backgroundColor = "red";
        freqCount[i].style.color = "white";

        await new Promise((resolve) => 
            setTimeout(() => resolve(), d)
        );

        let count = freqCount[i].innerText;
        if (count == 0) {
            freqArray[i].style.backgroundColor = "darkgray";
            freqCount[i].style.color = "black";
            await new Promise((resolve) =>
                setTimeout(() => resolve(), d)
            );
            continue;
        }

        let k = freqArrayIndex[i].innerText;
        for (let j = 0; j < count; j++) {
            barBlocks[index].style.backgroundColor = "red";
            barBlocks[index].style.height = `${k * 10}px`;
            barLabel[index].innerHTML = k;

            await new Promise((resolve) =>
                setTimeout(() => resolve(), d)
            );

            freqCount[i].innerText--;
            barBlocks[index].style.backgroundColor = "olive";
            index++;

            await new Promise((resolve) =>
                setTimeout(() => resolve(), d) 
            );

        }
        freqArray[i].style.backgroundColor = "darkgray";
        freqCount[i].style.color = "black";

        await new Promise((resolve) =>
            setTimeout(() => resolve(), d)
        );
    }
    
}


