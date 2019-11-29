var curPage = new URL(window.location.href);
var curLang = curPage.searchParams.get("lang") != null ? curPage.searchParams.get("lang") : "ru";

var IDACore = function () {
    var appcore = new Object({
        elements: {},
        helpers: {},
        lang: curLang,
        strings: {
            ru: {

            },
            en: {

            }
        },
        locale: function (value) {
            if (appcore.strings[appcore.lang][value] !== undefined) {
                return appcore.strings[app.lang][value];
            }
            else
                return value;
        },
        URLParams: {

        },
        URLString: "",
        URLParamsList: ["ParamCode", "Page", "animation"],
        getURLString: function () {
            appcore.URLString = "?id=" + appcore.URLParams["id"];
            for (var i = 0; i < appcore.URLParamsList.length; i++) {
                appcore.URLString += "&" + appcore.URLParamsList[i] + "=" + appcore.URLParams[appcore.URLParamsList[i]];
            }
        },
        getURLParams: function () {
            var getURl = window.location.search.substring(1);
            app.URLString = getURl;
            var params = getURl.split("&");
            for (var i = 0; i < params.length; i++) {
                var param = params[i].split("=");
                appcore.URLParams[param[0]] = param[1];
            }
            appcore.getURLString();
        },

        service: {},
        use: {}
    });

    return appcore;
};