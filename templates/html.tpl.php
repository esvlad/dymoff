<?

?>
<!DOCTYPE html>
<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <meta name="viewport" content="width=device-width">
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <?php print $page_top; ?>
  <?php print $page; ?>
  
  <?php print $page_bottom; ?>
</body>
</html>
