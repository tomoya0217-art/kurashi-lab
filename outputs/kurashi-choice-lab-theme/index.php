<?php
/**
 * Main template.
 *
 * @package Kurashi_Choice_Lab
 */

get_header();
?>
<main>
	<section class="page-title">
		<p class="eyebrow"><?php esc_html_e( 'Blog', 'kurashi-choice-lab' ); ?></p>
		<h1><?php single_post_title( '', true ); ?></h1>
		<p><?php bloginfo( 'description' ); ?></p>
	</section>
	<?php kcl_breadcrumbs(); ?>
	<div class="content-with-sidebar section compact">
		<div class="main-content">
			<?php if ( have_posts() ) : ?>
				<div class="article-grid">
					<?php
					while ( have_posts() ) :
						the_post();
						get_template_part( 'template-parts/content', 'card' );
					endwhile;
					?>
				</div>
				<?php kcl_the_posts_pagination(); ?>
			<?php else : ?>
				<?php get_template_part( 'template-parts/content', 'none' ); ?>
			<?php endif; ?>
		</div>
		<?php get_sidebar(); ?>
	</div>
</main>
<?php
get_footer();
