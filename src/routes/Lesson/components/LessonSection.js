// @flow

import React from 'react'
import ReactMarkdown from 'react-markdown'
import H1 from 'components/Typography/H1'

type LessonSectionProps = {
  sectionBody: string,
  sectionTitle: string,
  sectionImgAlt?: string,
  sectionImgUrl?: string,
  sectionFinishingText?: string,
  sectionSandbox?: string,
}

export const LessonSection = ({
  sectionBody,
  sectionTitle,
  sectionImgAlt,
  sectionImgUrl,
  sectionFinishingText,
  sectionSandbox,
}: LessonSectionProps) => (
  <div>
    <H1>{sectionTitle}</H1>

    <ReactMarkdown>{sectionBody}</ReactMarkdown>

    {sectionImgUrl && <img alt={sectionImgAlt} src={sectionImgUrl} />}

    {sectionSandbox && (
      <iframe
        src={sectionSandbox}
        style={{
          width: '100%',
          height: '500px',
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        title="unique"
      />
    )}

    {sectionFinishingText && <p>{sectionFinishingText}</p>}
  </div>
)

export default LessonSection
