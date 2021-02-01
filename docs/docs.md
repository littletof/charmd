# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
## `inline` *italic*

**bold** __text__ *italic* _text_ ***bold and italic***

> Some quote with **bold** and `block`
> > and Another quote
>> >> ### and some more quote

* Lists support
  + indentation
    - and 
      - `*`, `+`, `-`
  - ordered listItems
    1. first
    2. second
  - multi
    line
    content 

Inline `code` *`italics`* **`bold`** ***`both`***

```ts
function sum(...nums: number[]): number {
  return nums.reduce((sum, num) => sum + num, 0);
}
```

---

|   a   |   b   |   c   |
| ----- | :---: | ----: |
|  123  |  456  |  789  |
|  ABCDEF  |  DEFGHI  |  GHIJKL  |

[charMD](https://github.com/littletof/charmd)
[LinkReference]

[LinkReference]: https://deno.land/x

![Deno](https://deno.land/logo.svg)
![Alt text][id]

[id]: https://deno.land/logo.svg  "Deno logo"
