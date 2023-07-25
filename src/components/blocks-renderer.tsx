import React from "react"
import { tinaField } from "tinacms/dist/react"
import type { Page, PageBlocks } from "../../tina/__generated__/types"
import blocks from "./blocks"
import { twMerge } from "tailwind-merge"

interface iBlocks extends Page {
  className?: string
}

export const Blocks = (props: Omit<iBlocks, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block: PageBlocks, i: number) {
            return (
              <div
                key={i}
                data-tina-field={tinaField(block)}
                className={twMerge("mx-auto", props.className)}
              >
                <Block {...block} />
              </div>
            )
          })
        : null}
    </>
  )
}

const Block = (block: PageBlocks) => {
  const blockName = block.__typename
  const cleanBlockName = blockName.replace("PageBlocks", "")

  if (cleanBlockName in blocks)
    return React.createElement(blocks[cleanBlockName], { data: block })
}
