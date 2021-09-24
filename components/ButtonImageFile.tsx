import { useState } from 'react'
import styles from './ButtonImageFile.module.css'

export const ButtonImageFile = () => {
  const [isHidden, seIstHidden] = useState(false)
  // any使った documentの型宣言が分からなかった
  let inputFile: any
  let imgTagu: any
  let file: any

  if (process.browser) {
    inputFile = document.getElementById('inputFile')
    imgTagu = document.getElementById('imgTagu')
  }
  const deleteImage = () => {
    inputFile.value = ''
    imgTagu.src = ''
    seIstHidden(false)
  }

  const boxHidden = (e: { target: HTMLInputElement }) => {
    if (inputFile.value != '') {
      seIstHidden(true)
      const target = e.target.parentElement?.getElementsByTagName('input')
      file = target?.[0].files?.[0]
      const reader = new FileReader()
      // アップロードした画像を設定
      reader.onload = (function (_file) {
        return async function (e: any) {
          imgTagu.src = e.target.result
          // go.src = e.target.result;
          // go.hidden = false;
        }
      })(file)
      reader.readAsDataURL(file)
    }
  }

  // 写真アップロードボタンの処理
  const fileUpload = () => {
    inputFile = document.getElementById('inputFile')
    inputFile?.click()
    return
  }

  // const imagePreview = () => {
  //   const reader = inputFile.value;
  // }

  return (
    <div className={styles.container}>
      {isHidden || (
        <div id="inputBox">
          <p>Tresure</p>
          <input hidden id="inputFile" type="file" name="" onChange={boxHidden} />
          <button className={styles.button} onClick={fileUpload}>
            Choose File
          </button>
        </div>
      )}
      {isHidden && (
        <button onClick={deleteImage} className={styles.deleteButton}>
          X
        </button>
      )}
      <img id="imgTagu" src="" className={styles.imagePreview} />
    </div>
  )
}
