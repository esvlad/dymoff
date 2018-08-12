<? if($_SERVER['REQUEST_URI'] != '/contacts') : ?>
<? $block_contacts = module_invoke('views', 'block_view', 'contacts-block'); ?>
<section class="sect contacts">
  <div class="wrapper">
    <div class="gradient_circle_cmap"></div>
    <div class="content clearfix">
      <div class="contact_col_left">
        <h2> <span class="white">Контакты</span></h2>
          <? print render($block_contacts['content']); ?>
          <div class="contact_maps_yandex">
            <div id="myMap">
            </div>
            <script src="/sites/all/themes/dymoff/js/yaMaps.js"></script>
          </div>
        </div>
      </div>
    </div>
    <div class="gradient_circle_cmap_bot"></div>
  </div>
</section>
<? endif; ?>
<footer class="sect footer">
  <div class="wrapper">
    <div class="content clearfix">
      <p class="copyright">ООО &laquo;Дымофф&raquo; 2016&nbsp;&copy; все права защищены</p>
      <p class="developers">Производство и монтаж — <a href="https://promolink.su/" target="_blank">promolink</a></p>
    </div>
  </div>
</footer>