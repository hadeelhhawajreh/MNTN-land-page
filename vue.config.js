const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true
});
module.exports = {
    pwa: {
        name: "MNTN -LAND PAGE",
        themeColor: "#0B1D26",
        icons: {
            favicon32: "img/icons/favicon-32x32.png",
            favicon16: "img/icons/favicon-16x16.png",
        },
        display: "standalone"
    }
};