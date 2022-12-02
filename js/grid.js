'use strict'
// alert('start');
function remove(e){
    // イベントの要素を削除する処理関数
    let targetNode = e.currentTarget; // clickした要素を取得
    targetNode.parentElement.removeChild(targetNode); // 要素を削除 
}

// ユーザーリスト表の各要素にonclick()処理を追加する
let element = document.getElementById('userlist');
let children = element.childNodes;
let len = children.length;
for (let i = 0; i < len; i++){
    // console.log(children.item(i).nodeName);
    let n_node = children.item(i);
    n_node.addEventListener("click",{name:"dummy", handleEvent:remove},false);    
}

// 指定の要素だけにonclick要素を追加する例(引数つき)
function div01Func(e){
    // イベントの要素を更新する処理関数
    let targetNode = e.currentTarget; // clickした要素を取得
    targetNode.innerHTML=this.message; // 要素を上書き 
}

let div01 = document.getElementById('div01');
div01.addEventListener("click",{message:'div01が読み込まれました',handleEvent:div01Func},false);
// alert("end");

