<!-- omit in toc -->

# Contributing to Phosphor Icons

First off, thanks for taking the time to contribute! ❤️

We welcome many forms of contributions, though due to the creative nature of the project we do not typically accept icon contributions. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them, and read the relevant guidance before making your contribution. We look forward to your input!

> If you like the project, but don't have time to contribute, there are other easy ways to support the project and show your appreciation:
>
> - Donate via [Buy Me a Coffee](https://www.buymeacoffee.com/phosphoricons), or become a recurring contributor via [Patreon](https://patreon.com/phosphoricons) (this really helps!)
> - Star the project
> - Tweet about it, or share on other platforms
> - Refer this project in your project's README
> - Mention the project at local meetups and tell your friends/colleagues

<!-- omit in toc -->

## Table of Contents

- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
- [Requesting Icons](#requesting-icons)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Improving The Documentation](#improving-the-documentation)
- [Styleguides](#styleguides)
- [Commit Messages](#commit-messages)
- [Join The Project Team](#join-the-project-team)

## I Have a Question

> If you want to ask a question, we assume that you have read the available [documentation](https://github.com/phosphor-icons/homepage/blob/master/README.md).

Before you ask a question, it is best to search for existing [issues](https://github.com/phosphor-icons/homepage/issues) that might help you. In case you have found a suitable issue and still need clarification, you can add your question as a comment in that issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open a new issue using an [issue template](https://github.com/phosphor-icons/homepage/issues/new/choose).
- Provide as much context as you can about what you're running into (the template has prompts to help you here).
- Provide project and platform versions (`nodejs`, `npm`, etc), depending on what seems relevant.

We will address the issue as soon as we can.

## I Want To Contribute

> ### Legal Notice <!-- omit in toc -->
>
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Requesting Icons

<!-- omit in toc -->

#### Before Submitting an Icon Request

- Make sure there is not already an existing request for the icon(s) in question by searching the [issues](https://github.com/phosphor-icons/homepage/issues?q=label%3Aicon).
- If requesting a brand icon or logo, read the discussion [regarding brand logos](https://github.com/orgs/phosphor-icons/discussions/392) first, and be sure the brand meets the criteria and scope for this project.
- If requesting a visual change to an existing icon, make sure it is based on clarity, consistency, or readability.

<!-- omit in toc -->

#### How Do I Submit a Good Icon Request?

We use GitHub issues to track bicon requests. In order to submit a good icon request:

- Open an [issue](https://github.com/phosphor-icons/homepage/issues/new?assignees=rektdeckard&labels=icon&projects=&template=icon_request.md&title=).
- Include potential use-cases, and any alternatives in the set and why they are insufficient.
- Be specific. If requesting multiple icons, do not use "etc." unless it is unambiguous what that means.
- If applicabable, add the following supporting information:
  - Screenshots of related icons in-situ
  - Examples from other sets

<!-- omit in toc -->

### Reporting Bugs

<!-- omit in toc -->

#### Before Submitting a Bug Report

A good bug report contains all the necessary information for us (or others in the community) to reproduce, diagnose, and fix it. We ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- If your issue pertains to a specific library, please leave it on the relevant repository.
- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side, e.g. using incompatible environment components/versions (Make sure that you have read the [documentation](https://github.com/phosphor-icons/homepage/blob/master/README.md). If you are looking for support, you might want to check [this section](#i-have-a-question)).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the [issue tracker](https://github.com/phosphor-icons/homepage/issues?q=label%3Abug).
- Also make sure to search elsewhere (including Stack Overflow, framework or environment docs) to see if users outside of the GitHub community have discussed the issue.
- Collect information about the bug:
  - Stack trace (Traceback)
  - OS, Platform and Version
  - Version of the browser, runtime environment, package manager, depending on what seems relevant.
  - Your input, code, and any other relevant context
  - Can you reliably reproduce the issue? And can you also reproduce it with older versions?

<!-- omit in toc -->

#### How Do I Submit a Good Bug Report?

> Please do not report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker, or elsewhere in public. Instead sensitive bugs can be sent by email to [hello@phosphoricons.com](mailto:hello@phosphoricons.com?cc=friedtm@gmail.com&subject=Phosphor%20Security%20Vulnerability).

<!-- You may add a PGP key to allow the messages to be sent encrypted as well. -->

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [issue](https://github.com/phosphor-icons/homepage/issues/new?assignees=rektdeckard&labels=bug&projects=&template=bug_report.md&title=).
- Fill in the templated fields, making sure to:
  - Explain the behavior you would expect and the actual behavior.
  - Provide as much context as possible and describe the _reproduction steps_ that someone else can follow to recreate the issue on their own. This usually includes your code. For good bug reports you should isolate the problem and create a reduced test case.
  - Provide the information you collected in the previous section.

Once it's filed:

- The project team will label the issue accordingly.
- A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps. Bugs with the `needs-repro` tag will not be addressed until they are reproduced.
- If the team is able to reproduce the issue, it will be marked `needs-fix`, as well as possibly other tags (such as `critical`), and the issue will be left to be [implemented by someone](#your-first-code-contribution).

<!-- You might want to create an issue template for bugs and errors that can be used as a guide and that defines the structure of the information to be included. If you do so, reference it here in the description. -->

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Phosphor Icons, **including completely new features and minor improvements to existing functionality**. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

<!-- omit in toc -->

#### Before Submitting an Enhancement

- Make sure that you are using the latest version.
- Read the [documentation](https://github.com/phosphor-icons/homepage/blob/master/README.md) carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Search the [issues](https://github.com/phosphor-icons/homepage/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset. If you're just targeting a minority of users, consider writing an add-on/plugin library.

<!-- omit in toc -->

#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [issues](https://github.com/phosphor-icons/homepage/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why. At this point you can also tell which alternatives do not work for you.
- You may want to **include screenshots and/or animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to.
- **Explain why this enhancement would be useful** to most Phosphor Icons users. You may also want to point out the other projects that solved it better and which could serve as inspiration.

<!-- ### Your First Code Contribution -->

<!-- TODO
include Setup of env, IDE and typical getting started instructions?

-->

<!-- ### Improving The Documentation -->

<!-- If you see something that can be improved in our documentation, -->

## Styleguides

### Code Conventions

We use 80-character print width, 2-space tab width, ES5 trailing commas, double-quoted strings, and trailing semicolons. Please run the format script on all code contributions before submitting a PR:

```sh
pnpm format
```

### Commit Messages

We aspire to use [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#specification) style commit messages. This means commits should be of the format `<noun>(<domain>): <message>`, where:

- `<noun>` is one of `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`, `perf`, `ci`, `build`, or `revert`
- `<domain>` is a kebab-case name for the main affected area, e.g. `readme`
- `<message>` is a description in plain English of the changes at a high level

For example: `docs(readme): add installation instructions`.

Commits should contain a long-form description when relevant, or the message is not enough to describe the full nature of the changes. All commits sholud be limited to 80 characters line length.

<!-- omit in toc -->

## Attribution

This guide is based on the **contributing-gen**. [Make your own](https://github.com/bttger/contributing-gen)!
