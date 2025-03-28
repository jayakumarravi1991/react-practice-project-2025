# react-practice-project-2025

# AEM
1. what is out of box components in AEM?
2. What is AEM sling and content rendering?
3. What is CRXDE Lite?
4. AEM Templates?

1. what is out of box components in AEM?  
In Adobe Experience Manager (AEM), **out-of-the-box (OOTB) components** are pre-built components that come with the standard installation of AEM. These components are ready to use and can be directly utilized to build and manage content on your website.
Here are some key points about OOTB components:
- **Pre-built Functionality**: These components provide essential functionalities such as text, image, and video handling, forms, navigation, and more.
- **Customizable**: While they are ready to use, you can also extend and customize these components to fit specific requirements.
- **Core and Foundation Components**: AEM offers two sets of OOTB components:
  - **Core Components**: Introduced with AEM 6.3, these are modern, flexible, and feature-rich components that follow best practices.
  - **Foundation Components**: These have been available in AEM for many versions but are based on legacy technologies and are mostly deprecated.
- **Examples**: Some common OOTB components include the Paragraph System (parsys), responsive grid, text, image with accompanying text, and toolbar.
2. What is AEM sling and content rendering? 
Apache sling is a key **web application framework** used in Adobe Experience Manager (AEM) for **content rendering**. It is designed to facilitate the development of **content-oriented web applications by leveraging REST Principles and a Java Content Repository (JCR)** like Apache Jackrabbit or AEM's CRX repository. Here are some important aspects of Sling in AEM:
- **Resource-Oriented**: Sling treats content as resources, which are represented as nodes in a virtual content tree. Each resource corresponds to a JCR node.
- **URL Decomposition**: Sling processes URLs by decomposing them into parts such as method (GET, POST), path, selector, extension, suffix, and parameters. This helps in identifying the resource and the script to render it.
![image](https://github.com/user-attachments/assets/b0c28d66-bc2e-4b33-95ed-415fd878055e)

- **Script Resolution**: Sling uses the sling:resourceType property of a node to determine which script should be executed to render the content. This property points to the path of the script in the repository.
- **Component Resolution**: When a page URL is requested, Sling resolves the path to the JCR node, reads the sling:resourceType for each component, and executes the corresponding scripts to generate the final HTML, CSS, and JavaScript.

Sling's approach to content rendering makes it highly flexible and efficient for developing dynamic and scalable web applications in AEM.

3. What is CRXDE Lite?
  - CRXDE Lite is a development environment for AEM Projects.
  - It's embedded in AEM and enables you to perform standard development tasks in the browser.
  - Recommendation:
    - Use AEM Developer Tools when you are working with Eclipse plugins.
    - Use AEM HTL Brackets Extension during project development.
  - CRXDE Lite folder purposes:
    - Apps: This folder is used for storing all the component, scripts and templates definitions of related to your site.
    - config: This folder contains all configuration for your site. This folder is used to store editable templates and policies for your site.
    - content: This folder contains all the content created for your site by authors and editors.
    - etc: This folder contains all the resources related tools and utilities and it also contains client libraries and page designs.
    - home: This folder contains information about users and groups.
    - libs: This folder contains all the libraries and definitions that belongs to AEM core. It includes OOTB components, templates and any other AEM features.
    - tmp: This folder serves as a temporary working area
    - var: This folder contains files that changed and updated by the system such as audit logs, statistics and even handling.
  - We can create project folder inside Apps and then we can create components and templates folder inside project folder. Content folder contains two folder content and structures.
4. AEM Templates
- An template is used to create the page in AEM. Templates defines the base structure of the AEM page, initial content and components that can be used on the pages within the selected scope. Example tempaltes base page, content page, home page.
- when we create new page on the AEM page, the list of available template depends on the location of the new page and restriction specified in each template.
- Availability of templates can be controlled by using properties like allowedPath, allowedParents, allowedChildren, or allowedTemplates.
- Two types of templates are there:
  - Static templates: This template is created and defined and configured by developers. This template created and stored inside /apps/.. folder. uses design mode to persist the design properties. If we make any changes to the template structure will not reflect on created pages.
  - Edititable templates: This template can be created and edited by authors. This template created and stored inside /config/.. folder. uses content policies to persist the design properties. If we make any changes to the template structure will reflect on pages created with editable template.

