<?php
/**
 * Header template.
 *
 * @package Kurashi_Choice_Lab
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-header">
	<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
		<?php if ( has_custom_logo() ) : ?>
			<?php the_custom_logo(); ?>
		<?php else : ?>
			<span class="brand-mark">選</span>
			<span><?php bloginfo( 'name' ); ?></span>
		<?php endif; ?>
	</a>
	<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
		<span></span><span></span><span></span>
	</button>
	<nav id="site-nav" class="site-nav" aria-label="<?php esc_attr_e( 'メインナビゲーション', 'kurashi-choice-lab' ); ?>">
		<?php
		wp_nav_menu( array(
			'theme_location' => 'primary',
			'container'      => false,
			'menu_class'     => 'primary-menu',
			'fallback_cb'    => 'wp_page_menu',
			'depth'          => 2,
		) );
		?>
	</nav>
</header>
