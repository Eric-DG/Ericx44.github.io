<template>
  <div class="container z-1">
    <div class="box">
      <div class="imgBx">
        <img class="self-center mx-auto" src="../../assets/rommel-ss.png" />
      </div>
      <div class="content">
        <div>
          <h2>Romel Suites</h2>
          <p class="text-xs">
            During my internship, I designed a visually appealing website for a luxurious Baguio
            suite. I utilized Tailwind CSS, PostgreSQL, Express.js, and Vue.js to create a
            user-friendly platform. Explore this serene retreat and more in my portfolio of websites
            built with these advanced technologies.
          </p>
          >
        </div>
      </div>
    </div>
    <div class="box">
      <div class="imgBx">
        <img src="../../assets/akada-ss.png" />
      </div>
      <div class="content">
        <div>
          <h2>Akada 8</h2>
          <p>
            I harnessed my knowledge of PHP to build a functional and efficient web platform,
            showcasing the versatility of the language in delivering robust online experiences.
            Explore my portfolio and witness how my skills in PHP development come to life.
          </p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="imgBx">
        <img src="../../assets/capitol-ss.png" />
      </div>
      <div class="content">
        <div>
          <h2>Capitol Resorts and Hotels</h2>
          <p>
            I created a fast and user-friendly resort booking system in Lingayen, Pangasinan, using
            Vue.js and Strapi.js. Experience the convenience of modern booking technology in action.
          </p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="imgBx">
        <img src="../../assets/LGU-ss.png" />
      </div>
      <div class="content">
        <div>
          <h2>Local Government Unit</h2>
          <p>
            I used Nuxt.js for the front end and Express.js with PostgreSQL and Prisma for the back
            end to create an efficient daily time record and management system for a local
            government unit (LGU). Explore this innovative LGU project
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  position: relative;
  
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transform-style: preserve-3d;
  perspective: 600px;
  margin: auto;
}
.container .box {
  position: relative;
  width: 300px;
  height: 200px;
  background: #000;
  transition: 0.5s;
  transform-style: preserve-3d;
  overflow: hidden;
  margin-right: 20px;
  margin-top: 35px;
  margin-bottom: 35px;
  
}
.container:hover .box {
  transform: rotateY(25deg);
}
.container .box:hover ~ .box {
  transform: rotateY(-25deg);
}
.container .box:hover {
  transform: rotateY(0deg) scale(1.25);
  z-index: 1;
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
}
.container .box .imgBx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.container .box .imgBx:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(360deg, #fff, #000);
  z-index: 1;
  opacity: 0;
  transition: 0.5s;
  mix-blend-mode: multiply;
}
.container .box:hover .imgBx:before {
  opacity: 1;
}
.container .box .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container .box .content {
  position: absolute;
  top: 16px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  padding: 20px;
  align-items: flex-end;
  box-sizing: border-box;
}
.container .box .content h2 {
  color: #fff;
  transition: 0.5s;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: bold;
  transform: translateY(220px);
  transition-delay: 0.3s;
}
.container .box:hover .content h2 {
  transform: translateY(0px);
}
.container .box .content p {
  color: #fff;
  transition: 0.5s;
  font-size: 14px;
  transform: translateY(220px);
  transition-delay: 0.4s;
}
.container .box:hover .content p {
  transform: translateY(0px);
}
</style>
