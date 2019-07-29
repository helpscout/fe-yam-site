# module Jekyll
#   class ContentfulYamlToPostGenerator < Generator
#     safe true

#     def generate(site)
#       contentful_data = site.data['contentful']

#       if contentful_data
#         contentful_data['spaces']['posts']['testBlogPost'].each do |contentful_post|
#           site.posts.docs << ContentfulPost.new(site, site.source, contentful_post)
#         end
#       end
#     end
#   end

#   class ContentfulPost < Page
#     def initialize(site, base, contentful_post)
#       contentful_post_id = contentful_post[0]
#       contentful_post_data = contentful_post[1]

#       @site = site
#       @base = base

#       @dir = '/_posts'
#       @name = contentful_post[0].to_s + '.html'

#       self.process(@name)
#       self.read_yaml(File.join(base, '_layouts'), "post.html")
#       self.data['title'] = contentful_post_data['title']
#     end
#   end
# end
