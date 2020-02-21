window.addEventListener('load', function(){
    init();

});

var init = function(){
/**
 * Common
 */
    //header selectbox type 선택에 따른 년, 월 박스 show / hide
    var $typeSelectbox = document.querySelector('.view-type .type');
    var $yearMonthSelectbox = document.querySelector('.view-type .year-month');
    $typeSelectbox.addEventListener('change', function(){
        var choiceValue = $typeSelectbox.options[$typeSelectbox.selectedIndex].value;
        if(choiceValue == 'month'){
            $yearMonthSelectbox.classList.add('show');
        }else{
            $yearMonthSelectbox.classList.remove('show');
        }
    });

    //header searchbox
    var $btnSearchBox = document.querySelector('#header .btn-search');
    var $searchBox = document.querySelector('.search-box');
    var $btnSearchClose = document.querySelector('.search-box .btn-close');
    $btnSearchBox.addEventListener('click', function(){
        $searchBox.classList.add('active');
    });
    $btnSearchClose.addEventListener('click', function(){
        $searchBox.classList.remove('active');
    });

/**
 * PC
 */


/**
 * Mobile
 */
    //GNB show / hide
    var $btnMenu = document.querySelector('.btn-menu');
    var $gnb = document.querySelector('.gnb');
    $btnMenu.addEventListener('click', function(){
        if($btnMenu.classList.contains('active')){
            $btnMenu.classList.remove('active');
            $gnb.classList.remove('active');
        }else{
            $btnMenu.classList.add('active');
            $gnb.classList.add('active');
        }
    });
}

//Layer Content
function layerContShow(thisClass){
    document.querySelector('.'+thisClass).style.display = 'block';
}
function layerContHide(thisClass){
    document.querySelector('.'+thisClass).style.display = 'none';
}
