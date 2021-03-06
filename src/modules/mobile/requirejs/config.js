define(function() {

  console.log("mobile");
  require.config({
    map: {
      "*": {
        platform: "modules/mobile"
      }
    },

    paths: {
      components: "platform/components",
      layouts: "platform/components/layouts",
      core: "platform/core",
      services: "platform/services"
    },

    shim: {
      slick: {
        deps: ["jquery"]
      }
    }

  });
});