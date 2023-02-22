# PDFER

a simple cli to create pdf from folder of images, each image will be in its own page, it's not generic at all i needed a script to do the mission for specific use case and i did it that's it

## Getting Started

- clone the repo `git clone git@github.com:nagy-nabil/pdfer.git`

- install `pnpm install`

- build `pnpm build`

- install the cli globally under the name **pdfer** `npm i -g`

## How To Use

```bash
pdfer <folder absolute path> <output absolute path>
pdfer /folder/contains/images /folder/where/to/save/output.pdf
```

how i usaully use it `pdfer "$(pwd)" "$(pwd)/out.pdf"`

### Maybe Useful

most of the valuse are hard coded like page size except the dir path and the outut path, so the pdf won't look good in most cased. if you have the same use case and want to the cli to be more generic hit the issue button baby!!!!!!!!!!!!!!!!
