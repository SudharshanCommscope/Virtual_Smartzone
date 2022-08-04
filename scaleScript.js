var div0 = document.getElementById("transperant");
var form = div0.getElementsByTagName("form")[0];
var div1 = form.getElementsByTagName("div")[2];

var total = 0;
var string = "";

var info = document.getElementById("info");
var platform = document.getElementById("platform");

info.innerHTML=string;

function validationScale() {
    var ap = div1.getElementsByTagName("input")[0].value;
    var switches = div1.getElementsByTagName("input")[1].value;

    total = parseInt(ap);
    total += (parseInt(switches) * 5);

    var platformText = platform.options[platform.selectedIndex].text;

    if ($("#highScale").prop("checked")) {
        if (platformText === "Default") {
            if (total >= 1 && total <= 100) {
                string = "CPU : 2-4 \tRAM : 13GB\t Min.DiskSize : 150GB";
            }
            else if (total >= 101 && total <= 500) {
                string = "CPU : 4 \tRAM : 16GB\t Min.DiskSize : 150GB";
            }
            else if (total >= 501 && total <= 1000) {
                string = "CPU : 4-6 \tRAM : 18GB\t Min.DiskSize : 150GB";
            }
            else if (total >= 1001 && total <= 2500) {
                string = "CPU : 6 \tRAM : 22GB\t Min.DiskSize : 300GB";
            }
            else if (total >= 2501 && total <= 3000) {
                string = "CPU : 8 \tRAM : 24GB\t Min.DiskSize : 300GB";
            }
            else if (total >= 3001 && total <= 5000) {
                string = "CPU : 12 \tRAM : 28GB\t Min.DiskSize : 300GB";
            }
            else if (total >= 5001 && total <= 6000) {
                string = "CPU : 16 \tRAM : 30GB\t Min.DiskSize : 300GB";
            }
            else if (total >= 6001 && total <= 10000) {
                string = "CPU : 24 \tRAM : 48GB\t Min.DiskSize : 600GB";
            }
            else if (total >= 10001 && total <= 30000) {
                string = "CPU : 24 \tRAM : 48GB\t Min.DiskSize : 600GB";
            }
            else{
                string = "No data found";
            }

        } else if (platformText === "Microsoft Azure") {
            if (total >= 1 && total <= 100) {
                string = "DS11_v2 (2 vCPU/14GB RAM)orD4s_v3 (4 vCPU/16GB RAM)";
            }
            else if (total >= 101 && total <= 500) {
                string = "D4s_v3 (4 vCPU/16GB RAM)";
            }
            else if (total >= 501 && total <= 1000) {
                string = "E4s_v3 (4 vCPU/32GB RAM)";
            }
            else if (total >= 1001 && total <= 3000) {
                string = "D8s_v3 (8 vCPU/32GB RAM)";
            }
            else if (total >= 3001 && total <= 6000) {
                string = "F16s_v2 (16 vCPU/32GB RAM)";
            }
            else if (total >= 6001 && total <= 10000) {
                string = "F32s_v2 (32 vCPU/64GB RAM)";
            }
            else if (total >= 10001 && total <= 30000) {
                string = "F32s_v2 (32 vCPU/64GB RAM)";
            }
            else{
                string = "No data found";
            }

        } else if (platformText === "Amazon Web Service") {
            if (total >= 1 && total <= 100) {
                string = "r5.large (2 vCPU/16 GB RAM)";
            }
            else if (total >= 101 && total <= 500) {
                string = "m5.xlarge (4 vCPU/16 GB RAM)";
            }
            else if (total >= 501 && total <= 1000) {
                string = "r5.xlarge (4 vCPU/32GB RAM)";
            }
            else if (total >= 1001 && total <= 3000) {
                string = "m5.2xlarge (8 vCPU/32 GB RAM)";
            }
            else if (total >= 3001 && total <= 6000) {
                string = "c5.4xlarge (16 vCPU/32 GB RAM)";
            }
            else if (total >= 6001 && total <= 10000) {
                string = "c5.9xlarge (36 vCPU/72 GB RAM)";
            }
            else if (total >= 10001 && total <= 30000) {
                string = "c5.9xlarge (36 vCPU/72 GB RAM)";
            }
            else{
                string = "No data found";
            }
        }
    } else {
        if (platformText === "Default") {
            if (total >= 1 && total <= 100) {
                string = "CPU : 2-4 \tRAM : 13GB\t Min.DiskSize : 150GB";
            }
            else if (total >= 101 && total <= 500) {
                string = "CPU : 4 \tRAM : 16GB\t Min.DiskSize : 150GB";
            }
            else if (total >= 501 && total <= 1024) {
                string = "CPU : 8 \tRAM : 20GB\t Min.DiskSize : 250GB";
            }
            else if (total >= 1025 && total <= 3000) {
                string = "CPU : 8 \tRAM : 20GB\t Min.DiskSize : 250GB";
            }
            else{
                string = "No data found";
            }

        } else if (platformText === "Microsoft Azure") {
            if (total >= 1 && total <= 100) {
                string = "DS11_v2 (2 vCPU/14 GB RAM) or D4s_v3 (4 vCPU/16 GB RAM)";
            }
            else if (total >= 101 && total <= 500) {
                string = "D4s_v3 (4 vCPU/16 GB RAM)";
            }
            else if (total >= 501 && total <= 1024) {
                string = "D8s_v3 (8 vCPU/32 GB RAM)";
            }
            else if (total >= 1025 && total <= 3000) {
                string = "D8s_v3 (8 vCPU/32 GB RAM)";
            }
            else{
                string = "No data found";
            }
        } else if (platformText === "Amazon Web Service") {
            if (total >= 1 && total <= 100) {
                string = "r5.large (2 vCPU/16 GB RAM)";
            }
            else if (total >= 101 && total <= 500) {
                string = "m5.xlarge (4 vCPU/16 GB RAM)";
            }
            else if (total >= 501 && total <= 1024) {
                string = "m5.2xlarge (8 vCPU/32 GB RAM)";
            }
            else if (total >= 1025 && total <= 3000) {
                string = "m5.2xlarge (8 vCPU/32 GB RAM)";
            }
            else{
                string = "No data found";
            }
        }
    }

    display();

    function display(){
        document.getElementsByClassName("card")[0].style.display = "block";
        info.innerHTML = string;
    }
    
    document.getElementById("scaleForm").reset();
}
