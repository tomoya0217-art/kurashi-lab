<?php
/**
 * Page template.
 *
 * @package Kurashi_Choice_Lab
 */

get_header();
?>
<main>
	<?php
	while ( have_posts() ) :
		the_post();
		?>
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<section class="page-title">
				<p class="eyebrow"><?php esc_html_e( 'Page', 'kurashi-choice-lab' ); ?></p>
				<h1><?php the_title(); ?></h1>
				<?php if ( has_excerpt() ) : ?>
					<p><?php echo esc_html( get_the_excerpt() ); ?></p>
				<?php endif; ?>
			</section>
			<?php kcl_breadcrumbs(); ?>
			<div class="section compact">
				<div class="policy page-content">
					<?php
					if ( has_post_thumbnail() ) {
						echo '<figure class="featured-image">';
						the_post_thumbnail( 'large' );
						echo '</figure>';
					}
					the_content();
					wp_link_pages( array(
						'before' => '<div class="page-links">' . __( 'ページ:', 'kurashi-choice-lab' ),
						'after'  => '</div>',
					) );
					?>
				</div>
			</div>
		</article>
	<?php endwhile; ?>
</main>
<?php
get_footer();
