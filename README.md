# yarn-zero-install

Yarn zero-install + workspaces was confusing so this is a simple example of it working.

Main gist:
- list all packages in the package.json "workspaces" array
- if you want to "link" a package, add "workspace:package-name" as the dependency and run `yarn` to link