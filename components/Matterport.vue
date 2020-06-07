<template>
    <div id="matterport-demo" class="bg-gray-900">
    <div class="container mx-auto py-12 lg:py-24">
        <h3 class="my-6 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">Matterport Live Demo</h3>
            <div class="iframe-container">
                <iframe src='https://my.matterport.com/show/?m=fCgArX3MyKw' frameborder='0' allowfullscreen allow='xr-spatial-tracking'></iframe>
            </div>
        </div>
    </div>
</template>

<style scoped>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>