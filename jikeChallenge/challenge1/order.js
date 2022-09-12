const TO_BE_PAIED = "待付款";
const TO_BE_SENT = "待发货";
const FINISHED = "已完成";
const POST_SALE = "售后中";
let selectTag = "tag_all";

(function () {
    requestAllOrder();
})()

function requestAllOrder() {
    /* for static usage */
    var divStr = "";
    var statusArray = [TO_BE_PAIED, FINISHED, TO_BE_SENT, POST_SALE, TO_BE_SENT, TO_BE_SENT, TO_BE_SENT];
    var itemArray = ["coupons", "phone", "coupons", "coupons", "coupons", "coupons", "coupons"];
    var pointArray = ["50", "50", "50", "50", "50", "50", "50", "50"];
    for (var i = 0; i < statusArray.length; i++) {
        var uri = itemArray[i] === 'coupons' ? "img/coupons.png" : "img/phone.png";
        var item = itemArray[i] === 'coupons' ? "Galaxy Z系列 5折券" : "Galaxy Note20系列手机";
        var status = statusArray[i];
        var point = pointArray[i] + "积分";
        divStr += generateItemDiv({
            uri: uri,
            item: item,
            status: status,
            point: point
        });
    }
    document.getElementById("orderContent").innerHTML = divStr;
}

function generateItemDiv({uri, item, status, point }) {
    /*<div class="item">
    <img src="img/phone.png" alt="图片加载错误" class="image">
    <div>
        <div class="desc">
            <span style="display: block;">Galaxy Z系列 5折卷</span>
            <span style="display: block; color: blue;">50积分</span>
        </div>
        <div class="status">
            <div class="toBePaied">待付款</div>
        </div>
    </div>
    </div> */
    var divStr = "";
    var img = "<img src='" + uri + "' alt='图片加载错误' class='image'/>";
    var desc = "<div class='desc'>"
        + "<span class='descText'>" + item + "</span>"
        + "<span class='descPoint'>" + point + "</span>"
        + "</div>";
    var statusCss = status === TO_BE_PAIED ? "toBePaied"
        : status === TO_BE_SENT ? "toBeSent"
        : status === FINISHED ? "finished"
                : status === POST_SALE ? "postSale" : "none";

    var status = "<div class='status'>"
        + "<div class='" + statusCss + "'>" + status + "</div>"
        + "</div>";
    
    divStr = "<div class='item'>" + img
        + "<div>" + desc + status + "</div>"
        + "</div>";
    return divStr;
}

function setSelectTag(id) {
    document.getElementById(selectTag).removeAttribute('class');
    selectTag = id;
    var div = document.getElementById(selectTag);
    div.removeAttribute('class');
    div.setAttribute('class', 'tagActive');
}

/* when selected, generateItemDiv can be triggered */
function paidSelected() {
    setSelectTag("tag_paid");
}

function sentSelected() {
    setSelectTag("tag_sent")
}

function finishedSelected() {
    setSelectTag("tag_finished");
}

function postSaleSelected() {
    setSelectTag("tag_postsale");
}

function allSelected() {
    setSelectTag("tag_all");
}
