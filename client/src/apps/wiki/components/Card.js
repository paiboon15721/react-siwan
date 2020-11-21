/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const Card = ({ title, text, pageid, special }) => {
  return (
    <div
      className="card"
      css={css`
        .card-body {
          .card-title {
            color: var(--bs-primary);
            &:hover {
              color: var(--bs-success);
            }
          }
        }
      `}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        <a
          href={`https://en.wikipedia.org?curid=${pageid}`}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Go to wiki page
        </a>
      </div>
    </div>
  )
}
export default Card
