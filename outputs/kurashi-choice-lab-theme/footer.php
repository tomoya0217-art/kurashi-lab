<?php
/**
 * Footer template.
 *
 * @package Kurashi_Choice_Lab
 */
?>
<?php if ( is_active_sidebar( 'footer-widgets' ) ) : ?>
	<section class="footer-widgets section compact">
		<?php dynamic_sidebar( 'footer-widgets' ); ?>
	</section>
<?php endif; ?>
<footer class="site-footer">
	<p>&copy; <?php echo esc_html( date_i18n( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?></p>
	<div>
		<?php
		wp_nav_menu( array(
			'theme_location' => 'footer',
			'container'      => false,
			'menu_class'     => 'footer-menu',
			'fallback_cb'    => false,
			'depth'          => 1,
		) );
		?>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
