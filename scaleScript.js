var div0 = document.getElementById("transperant");
var form = div0.getElementsByTagName("form")[0];
var div1 = form.getElementsByTagName("div")[2];

var total = 0;
var string = "";

var info = document.getElementById("info");
info.innerHTML = string;

var platform = document.getElementById("platform");

if (window.innerWidth <= 650) {
    platform = document.getElementById("smPlatform");
    div1 = form.getElementsByTagName("div")[7];
}

console.log(platform);
console.log(div1);

function validationScale() {
    var ap = div1.getElementsByTagName("input")[0].value;
    var switches = div1.getElementsByTagName("input")[1].value;

    if (ap == "" && switches == "") {
        ap = "null";
        switches = "null";
        total = 0;
    }
    else {
        if (ap != "") {
            total = parseInt(ap);
        }
        else {
            ap = "null";
        }
        if (switches != "") {
            total += (parseInt(switches) * 5);
        }
        else {
            switches = "null";
        }
    }

    var platformText = platform.options[platform.selectedIndex].text;

    var result = document.getElementsByTagName("span");
    console.log(result);
    result[2].innerHTML = "Platform : " + platformText;
    result[3].innerHTML = "Ap Count : " + ap;
    result[4].innerHTML = "Switch Count : " + switches;

    var cpu = "", ram = "", disk = "", diskIo = "";

    if ($("#highScale").prop("checked")) {
        result[1].innerHTML = "vSZ Model : High Scale (vSZ-H)";
        if (platformText === "VMware/Hyper-V/KVM") {
            if (total >= 1 && total <= 100) {
                string = "";
                cpu = "2-4<sup>[3]</sup> Logic Processor";
                ram = "13GB";
                disk = "150GB";
                diskIo = "15MiB/s";
            }
            else if (total >= 101 && total <= 500) {
                string = "";
                cpu = "4 Logic Processor";
                ram = "16GB";
                disk = "150GB";
                diskIo = "15MiB/s";
            }
            else if (total >= 501 && total <= 1000) {
                string = "";
                cpu = "4-6<sup>[4]</sup> Logic Processor";
                ram = "18GB";
                disk = "150GB";
                diskIo = "20MiB/s";
            }
            else if (total >= 1001 && total <= 2500) {
                string = "";
                cpu = "6 Logic Processor";
                ram = "22GB";
                disk = "300GB";
                diskIo = "25MiB/s";
            }
            else if (total >= 2501 && total <= 3000) {
                string = "";
                cpu = "8 Logic Processor";
                ram = "24GB";
                disk = "300GB";
                diskIo = "30MiB/s";
            }
            else if (total >= 3001 && total <= 5000) {
                string = "";
                cpu = "12 Logic Processor";
                ram = "28GB";
                disk = "300GB";
                diskIo = "30MiB/s";
            }
            else if (total >= 5001 && total <= 6000) {
                string = "";
                cpu = "16 Logic Processor";
                ram = "30GB";
                disk = "300GB";
                diskIo = "35MiB/s";
            }
            else if (total >= 6001 && total <= 10000) {
                string = "";
                cpu = "24 Logic Processor";
                ram = "48GB";
                disk = "600GB";
                diskIo = "45MiB/s";
            }
            else {
                string = "<br/>No data found";
            }

        } else if (platformText === "Microsoft Azure") {
            if (total >= 1 && total <= 100) {
                string = "";
                cpu = "DS11_v2 (2 Logic Processor)<br />or<br />D4s_v3 (4 Logic Processor)";
                ram = "14GB<br />or<br />16GB";
                disk = "150GB";
                diskIo = "15MiB/s";
            }
            else if (total >= 101 && total <= 500) {
                string = "";
                cpu = "D4s_v3 (4 Logic Processor)";
                ram = "16GB";
                disk = "150GB";
                diskIo = "15MiB/s";
            }
            else if (total >= 501 && total <= 1000) {
                string = "";
                cpu = "E4s_v3 (4 Logic Processor)";
                ram = "32GB";
                disk = "150GB";
                diskIo = "20MiB/s";
            }
            else if (total >= 1001 && total <= 3000) {
                string = "";
                cpu = "D8s_v3 (8 Logic Processor)";
                ram = "32GB";
                disk = "300GB";
                diskIo = "25MiB/s";
            }
            else if (total >= 3001 && total <= 6000) {
                string = "";
                cpu = "F16s_v2 (16 Logic Processor)";
                ram = "32GB";
                disk = "300GB";
                diskIo = "35MiB/s";
            }
            else if (total >= 6001 && total <= 10000) {
                string = "";
                cpu = "F32s_v2 (32 Logic Processor)";
                ram = "64GB";
                disk = "600GB";
                diskIo = "45MiB/s";
            }
            else {
                string = "<br/>No data found";
            }

        } else if (platformText === "Amazon Web Service") {
            if (total >= 1 && total <= 100) {
                string = "";
                cpu = "r5.large (2 Logic Processor)";
                ram = "16GB";
                disk = "150GB";
                diskIo = "15MiB/s";
            }
            else if (total >= 101 && total <= 500) {
                string = "";
                cpu = "m5.xlarge (4 Logic Processor)";
                ram = "16GB";
                disk = "150GB";
                diskIo = "15MiB/s";
            }
            else if (total >= 501 && total <= 1000) {
                string = "";
                cpu = "r5.xlarge (4 Logic Processor)";
                ram = "32GB";
                disk = "150GB";
                diskIo = "20MiB/s";
            }
            else if (total >= 1001 && total <= 3000) {
                string = "";
                cpu = "m5.2xlarge (8 Logic Processor)";
                ram = "32GB";
                disk = "300GB";
                diskIo = "25MiB/s";
            }
            else if (total >= 3001 && total <= 6000) {
                string = "";
                cpu = "c5.4xlarge (16 Logic Processor)";
                ram = "32GB";
                disk = "300GB";
                diskIo = "35MiB/s";
            }
            else if (total >= 6001 && total <= 10000) {
                string = "";
                cpu = "c5.9xlarge (36 Logic Processor)";
                ram = "72GB";
                disk = "600GB";
                diskIo = "45MiB/s";
            }
            else {
                string = "<br/>No data found";
            }
        }
    } else {
        result[1].innerHTML = "vSZ Model : Essential Scale (vSZ-E)";
        if (platformText === "VMware/Hyper-V/KVM") {
            if (total >= 1 && total <= 100) {
                string = "";
                cpu = "2-4<sup>[3]</sup> Logic Processor";
                ram = "13GB";
                disk = "150GB";
                diskIo = "15MiB/s";
            }
            else if (total >= 101 && total <= 500) {
                string = "";
                cpu = "4 Logic Processor";
                ram = "16GB";
                disk = "150GB";
                diskIo = "15MiB/s";
            }
            else if (total >= 501 && total <= 1024) {
                string = "";
                cpu = "8 Logic Processor";
                ram = "20GB";
                disk = "250GB";
                diskIo = "20MiB/s";
            }
            else {
                string = "<br/>No data found";
            }

        } else if (platformText === "Microsoft Azure") {
            if (total >= 1 && total <= 100) {
                string = "";
                cpu = "DS11_v2 (2 Logic Processor)<br/>or<br />D4s_v3 (4 Logic Processor)";
                ram = "14GB<br />or<br />16GB";
                disk = "150GB";
                diskIo = "15MiB/s";
            }
            else if (total >= 101 && total <= 500) {
                string = "";
                cpu = "D4s_v3 (4 Logic Processor)";
                ram = "16GB";
                disk = "150GB";
                diskIo = "15MiB/s";
            }
            else if (total >= 501 && total <= 1024) {
                string = "";
                cpu = "D8s_v3 (8 Logic Processor)";
                ram = "32GB";
                disk = "250GB";
                diskIo = "20MiB/s";
            }
            else {
                string = "<br/>No data found";
            }
        } else if (platformText === "Amazon Web Service") {
            if (total >= 1 && total <= 100) {
                string = "";
                cpu = "r5.large (2 Logic Processor)";
                ram = "16GB";
                disk = "150GB";
                diskIo = "15MiB/s";
            }
            else if (total >= 101 && total <= 500) {
                string = "";
                cpu = "m5.xlarge (4 Logic Processor)";
                ram = "16GB";
                disk = "150GB";
                diskIo = "15MiB/s";
            }
            else if (total >= 501 && total <= 1024) {
                string = "";
                cpu = "m5.2xlarge (8 Logic Processor)";
                ram = "32GB";
                disk = "250GB";
                diskIo = "20MiB/s";
            }
            else {
                string = "<br/>No data found";
            }
        }
    }

    display();

    function display() {
        info.innerHTML = "<b>Virtual SmartZone Minimum Requirements :</b>";
        var table = document.getElementsByTagName("table")[0];
        if (string != "") {
            table.style.display = "none";
            info.innerHTML += string;
        }
        else{
            table.style.display = "block";
            table.getElementsByTagName("td")[0].innerHTML=cpu;
            table.getElementsByTagName("td")[1].innerHTML=ram;
            table.getElementsByTagName("td")[2].innerHTML=disk;
            table.getElementsByTagName("td")[3].innerHTML=diskIo;
        }
        document.getElementsByClassName("card")[0].style.display = "block";
    }

    document.getElementById("scaleForm").reset();
}
