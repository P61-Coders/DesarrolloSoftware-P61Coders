<template>
    <!-- Seccion Footer - Desarrollada por David Fonseca -->
    <section class="seccion-footer">
     <!-- Footer Start-->
      <div class="footer-main">
        <div class="footer-area footer-padding">
            <div class="container">
                <div class="row  justify-content-between">
                    <div class="col-lg-3 col-md-4 col-sm-8">
                         <div class="single-footer-caption mb-30">
                              <!-- logo -->
                             <div>
                                <router-link class="footer-logo" :to="{name: 'Home'}">
                                    Fruver
                                </router-link>
                             </div>
                             <div class="footer-tittle">
                                 <div class="footer-links">
                                     <p class="info1">https://github.com/P61-Coders/DesarrolloSoftware-P61Coders.git</p>
                                </div>
                             </div>
                         </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-5">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Quick Links</h4>
                                <ul class="footer-links">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Download</a></li>
                                    <li><a href="#">Reviews</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-7">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Support</h4>
                                <ul class="footer-links">
                                    <li><a href="#">Report a bug</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-8">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Novedades</h4>
                                <div class="footer-links">
                                 <p>Quieres recibir novedades. Suscribete!</p>
                             </div>
                             <!-- Form -->
                             <div class="footer-form">
                                 <div id="mc_embed_signup">
                                     <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="subscribe_form relative mail_part" novalidate="true">
                                         <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " class="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = ' Email Address '">
                                         <div class="form-icon">
                                             <button type="submit" name="submit" id="newsletter-submit" class="email_icon newsletter-submit button-contactForm"><img src="assets/img/shape/form_icon.png" alt=""></button>
                                         </div>
                                         <div class="mt-10 info"></div>
                                     </form>
                                 </div>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Copy-Right -->
                <div class="row align-items-center">
                    <div class="col-xl-12 ">
                        <div class="footer-copy-right">
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
       <!-- Footer End-->
        
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
.seccion-footer {
  margin-top: 100px;
  padding-top: 150px;
  padding-bottom: 150px;
}

a {
  text-decoration: none;
  color: #707b8e;
}

.footer-logo {
    color: #2b044d;
    font-family: 'Nunito', sans-serif;
    font-size: 40px;
    padding-bottom: 50px;
}

.footer-tittle{
    font-family: 'Nunito', sans-serif;
    font-size: 15px;

}

.footer-links {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 2;
    color: #707b8e;
}

li {
    color: #707b8e;
    max-width: 410px;
    line-height: 2.5;
}

</style>