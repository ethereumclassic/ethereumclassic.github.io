import React from 'react';
import ButtonLink from './buttonLink';

class NewsTagsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { showing: false };
  }

  handleClick() {
    this.setState({ showing: !this.state.showing });
  }

  render() {
    const { i18n, pagination } = this.props;
    const { showing } = this.state;
    const { tags, filter, type, basePath } = pagination;
    const selected = type === 'tag';
    return (
      <>
        <div className={`button-link ${selected ? 'selected' : ''}`} onClick={this.handleClick}>
          {selected && filter ? i18n[`tag-${filter}`] || filter : i18n.filterTag}
          <i className="fas fa-angle-down right" />
        </div>
        <div className={`nudge tags ${showing ? 'showing' : ''}`}>
          {tags.map(tag => (
            <ButtonLink
              text={i18n[`tag-${tag}`] || tag}
              to={`${basePath}tag/${tag}`}
              notLocalized
              noScroll
              className={tag === filter ? 'selected' : ''}
            />
          ))}
        </div>
      </>
    );
  }
}

export default NewsTagsFilter;
