var div0 = document.getElementById("transperant");
var form = div0.getElementsByTagName("form")[0];
var div1 = form.getElementsByTagName("div")[2];

var total = 0;
var string = "";

var info = document.getElementById("info");
info.innerHTML = string;

var platform = document.getElementById("platform");

if(window.innerWidth<=650){
    platform = document.getElementById("smPlatform");
    div1=form.getElementsByTagName("div")[7];
}

console.log(platform);
console.log(div1);

function validationScale() {
    var ap = div1.getElementsByTagName("input")[0].value;
    var switches = div1.getElementsByTagName("input")[1].value;

    if (ap == "") {
        document.getElementsByClassName("fw-bold")[0].style.display = "block";
        document.getElementById("para").innerHTML = "Ap Count Required";
        return false;
    }
    else {
        total = parseInt(ap);
        document.getElementById("para").innerHTML = "";
        document.getElementsByClassName("fw-bold")[0].style.display = "none";
        if (ap != "" && switches != "") {
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

    if ($("#highScale").prop("checked")) {
        result[1].innerHTML = "vSZ Model : High Scale (vSZ-H)";
        if (platformText === "VMware/Hyper-V/KVM") {
            if (total >= 1 && total <= 100) {
                string = "<br/>CPU : 2-4   RAM : 13GB   Min.DiskSize : 150GB";
            }
            else if (total >= 101 && total <= 500) {
                string = "<br/>CPU : 4   RAM : 16GB   Min.DiskSize : 150GB";
            }
            else if (total >= 501 && total <= 1000) {
                string = "<br/>CPU : 4-6   RAM : 18GB   Min.DiskSize : 150GB";
            }
            else if (total >= 1001 && total <= 2500) {
                string = "<br/>CPU : 6   RAM : 22GB   Min.DiskSize : 300GB";
            }
            else if (total >= 2501 && total <= 3000) {
                string = "<br/>CPU : 8   RAM : 24GB   Min.DiskSize : 300GB";
            }
            else if (total >= 3001 && total <= 5000) {
                string = "<br/>CPU : 12   RAM : 28GB   Min.DiskSize : 300GB";
            }
            else if (total >= 5001 && total <= 6000) {
                string = "<br/>CPU : 16   RAM : 30GB   Min.DiskSize : 300GB";
            }
            else if (total >= 6001 && total <= 10000) {
                string = "<br/>CPU : 24   RAM : 48GB   Min.DiskSize : 600GB";
            }
            else {
                string = "<br/>No data found";
            }

        } else if (platformText === "Microsoft Azure") {
            if (total >= 1 && total <= 100) {
                string = "<br/>DS11_v2 (2 vCPU / 14GB RAM)<br />or<br/>D4s_v3 (4 vCPU / 16GB RAM)";
            }
            else if (total >= 101 && total <= 500) {
                string = "<br/>D4s_v3 (4 vCPU / 16GB RAM)";
            }
            else if (total >= 501 && total <= 1000) {
                string = "<br/>E4s_v3 (4 vCPU / 32GB RAM)";
            }
            else if (total >= 1001 && total <= 3000) {
                string = "<br/>D8s_v3 (8 vCPU / 32GB RAM)";
            }
            else if (total >= 3001 && total <= 6000) {
                string = "<br/>F16s_v2 (16 vCPU / 32GB RAM)";
            }
            else if (total >= 6001 && total <= 10000) {
                string = "<br/>F32s_v2 (32 vCPU / 64GB RAM)";
            }
            else {
                string = "<br/>No data found";
            }

        } else if (platformText === "Amazon Web Service") {
            if (total >= 1 && total <= 100) {
                string = "<br/>r5.large (2 vCPU / 16GB RAM)";
            }
            else if (total >= 101 && total <= 500) {
                string = "<br/>m5.xlarge (4 vCPU / 16GB RAM)";
            }
            else if (total >= 501 && total <= 1000) {
                string = "<br/>r5.xlarge (4 vCPU / 32GB RAM)";
            }
            else if (total >= 1001 && total <= 3000) {
                string = "<br/>m5.2xlarge (8 vCPU / 32GB RAM)";
            }
            else if (total >= 3001 && total <= 6000) {
                string = "<br/>c5.4xlarge (16 vCPU / 32GB RAM)";
            }
            else if (total >= 6001 && total <= 10000) {
                string = "<br/>c5.9xlarge (36 vCPU / 72GB RAM)";
            }
            else {
                string = "<br/>No data found";
            }
        }
    } else {
        result[1].innerHTML = "vSZ Model : Essential Scale (vSZ-E)";
        if (platformText === "VMware/Hyper-V/KVM") {
            if (total >= 1 && total <= 100) {
                string = "<br/>CPU : 2-4   RAM : 13GB   Min.DiskSize : 150GB";
            }
            else if (total >= 101 && total <= 500) {
                string = "<br/>CPU : 4   RAM : 16GB   Min.DiskSize : 150GB";
            }
            else if (total >= 501 && total <= 1024) {
                string = "<br/>CPU : 8   RAM : 20GB   Min.DiskSize : 250GB";
            }
            else {
                string = "<br/>No data found";
            }

        } else if (platformText === "Microsoft Azure") {
            if (total >= 1 && total <= 100) {
                string = "<br/>DS11_v2 (2 vCPU / 14GB RAM)<br/>or<br />D4s_v3 (4 vCPU / 16GB RAM)";
            }
            else if (total >= 101 && total <= 500) {
                string = "<br/>D4s_v3 (4 vCPU / 16GB RAM)";
            }
            else if (total >= 501 && total <= 1024) {
                string = "<br/>D8s_v3 (8 vCPU / 32GB RAM)";
            }
            else {
                string = "<br/>No data found";
            }
        } else if (platformText === "Amazon Web Service") {
            if (total >= 1 && total <= 100) {
                string = "<br/>r5.large (2 vCPU / 16GB RAM)";
            }
            else if (total >= 101 && total <= 500) {
                string = "<br/>m5.xlarge (4 vCPU / 16GB RAM)";
            }
            else if (total >= 501 && total <= 1024) {
                string = "<br/>m5.2xlarge (8 vCPU / 32GB RAM)";
            }
            else {
                string = "<br/>No data found";
            }
        }
    }

    display();

    function display() {
        document.getElementsByClassName("card")[0].style.display = "block";
        info.innerHTML = "<b>Virtual SmartZone Minimum Requirements :</b>"+string;
    }

    document.getElementById("scaleForm").reset();
}
