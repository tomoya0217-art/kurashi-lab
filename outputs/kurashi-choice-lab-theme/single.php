<?php
/**
 * Single post template.
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
		<article id="post-<?php the_ID(); ?>" <?php post_class( 'article-page' ); ?>>
			<header class="article-hero">
				<p class="eyebrow"><?php echo wp_kses_post( get_the_category_list( ' / ' ) ); ?></p>
				<h1><?php the_title(); ?></h1>
				<?php if ( has_excerpt() ) : ?>
					<p><?php echo esc_html( get_the_excerpt() ); ?></p>
				<?php endif; ?>
				<?php kcl_posted_on(); ?>
				<?php if ( has_post_thumbnail() ) : ?>
					<figure class="featured-image"><?php the_post_thumbnail( 'large' ); ?></figure>
				<?php endif; ?>
			</header>
			<?php kcl_breadcrumbs(); ?>
			<div class="article-layout">
				<aside class="toc article-sidebar">
					<strong><?php esc_html_e( '記事メニュー', 'kurashi-choice-lab' ); ?></strong>
					<a href="#post-content"><?php esc_html_e( '本文', 'kurashi-choice-lab' ); ?></a>
					<a href="#related-posts"><?php esc_html_e( '関連記事', 'kurashi-choice-lab' ); ?></a>
				</aside>
				<div class="article-body" id="post-content">
					<?php the_content(); ?>
					<?php
					wp_link_pages( array(
						'before' => '<div class="page-links content-panel">' . __( 'ページ:', 'kurashi-choice-lab' ),
						'after'  => '</div>',
					) );
					?>
					<div id="related-posts">
						<?php kcl_related_posts(); ?>
					</div>
				</div>
			</div>
		</article>
	<?php endwhile; ?>
</main>
<?php
get_footer();
