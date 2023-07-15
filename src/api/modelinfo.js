import request, { Method } from '@/plugins/request.js';

/**
 * get message for mainframe
 */
export function getModelInfoForMainFrame() {
    var modeInfoGrid = new Array();

    queryMainGrid().then(res => {
        var modelListres = {};

        modelListres = JSON.parse(res.bussData.modelList);
        console.log(modelListres, "99999999999999999999999999");

        for (var i = 0; i < modelListres.length; i++) {
            var modelInfoItem = {};
            var modelInfo = modelListres[i];
            modelInfoItem.id = modelInfo.modelId;
            modelInfoItem.title = modelInfo.modelName;
            modelInfoItem.desc = modelInfo.modelSubName;
            modelInfoItem.src = modelInfo.modelCover[0];
            modelInfoItem.num = 322;
            modeInfoGrid.push(modelInfoItem);
            console.log(modeInfoGrid[i], "99999977777777777777777777");
        } 
    });

    return modeInfoGrid;
}


//根据分类筛选模型
export function getModelGridByCategoty1(category){
    var modeInfoGrid = new Array();
    queryByCategory1(category).then(res => {
        var modelListres = {};

        modelListres = JSON.parse(res.bussData.modelList);
        for (var i = 0; i < modelListres.length; i++) {
            var modelInfoItem = {};
            var modelInfo = modelListres[i];
            modelInfoItem.id = modelInfo.modelId;
            modelInfoItem.title = modelInfo.modelName;
            modelInfoItem.desc = modelInfo.modelSubName;
            modelInfoItem.img = modelInfo.modelCover[0];
            modeInfoGrid.push(modelInfoItem);
        }

    });
    return modeInfoGrid;

}

function queryMainGrid() {
    return request({
        url: '/queryModelInfoForMainView.do',
        method: 'POST',
        data: {
            "custId": "1685969357974",
            "bussData": {
                "pageIndex": 0,
                "pageSize": 5
            }
        }
    });
}

function queryByCategory1(category){
    return request({
        url: '/queryModelInfoByCategory1.do',
        method: 'POST',
        data: {
            "custId": "1685969357974",
            "bussData": {
                "pageIndex": 0,
                "pageSize": 10,
                "category1":category
            }
        }
    });
}

export function addModelBaseInfo(formModel) {
    return request({
        url: '/queryModelInfoByCategory1.do',
        method: 'POST',
        data: {
            "custId": "1685969357974",
            "bussData": {
                "pageIndex": 0,
                "pageSize": 10,
                "category1":category
            }
        }
    });

}


