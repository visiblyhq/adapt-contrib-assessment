import PageModel from 'core/js/models/pageModel';
import AdaptAssessmentPageModel from './adapt-assessmentPageModel';
import './assessment';

// Extends core/js/models/pageModel.js
const ArticlePageInitialize = PageModel.prototype.initialize;
PageModel.prototype.initialize = function(options) {
  if (this.get('_assessment')?._isEnabled === true) {
    // extend the articleModel with new functionality
    Object.assign(this, AdaptAssessmentPageModel);

    // initialize the article in the normal manner
    const returnValue = ArticlePageInitialize.apply(this, arguments);

    // initialize assessment article
    this._postInitialize();

    return returnValue;
  }

  // initialize the article in the normal manner if no assessment
  return ArticlePageInitialize.apply(this, arguments);
};
