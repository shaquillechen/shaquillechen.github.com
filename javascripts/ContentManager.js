class ContentManger {
    constructor (targetNode) {
        this.targetNode = targetNode;
    }
    p (obj=$('<br>')) {
        obj.appendTo(this.targetNode);
        return this;
    }
    rp (obj=$('<br>')) {
        $(this.targetNode).empty();
        obj.appendTo(this.targetNode);
        return this;
    }

    setTarget (targetNode) {
        this.targetNode = targetNode;
    }

    getTarget () {
        return this.targetNode;
    }

    createNewObj (obj, attr) {
        var newObj = $(`<${obj}>`, attr);
        return newObj;
    }

    setTitle (title) {
        var target = this.getTarget();
        this.setTarget('head');
        this.p(this.createNewObj('title', {text:title})).setTarget(target);
    }

    addSkill (name, skills) {
        var skill = this.createNewObj('li', {class:'skill'});
        skill.append(`<dt><i class="icon-bookmark"></i>${name}</dt>`);
        for (var s in skills) {
            skill.append(`<dd>
                            <div class="skill-name"><b>${s}</b></div>
                            <div class="skill-bar-wrap"><div class="skill-bar" style="width: ${skills[s]}%"></div></div>
                          </dd>`);
        }
        this.p(skill);
    }

    addBookmark (name) {
        var bookmark = this.createNewObj('dt');
        this.createNewObj('i',{class:'icon-bookmark',text:name}).appendTo(bookmark);
        BOOKMARK[name] = `.bookmark-${name.toUpperCase()}:last`;
        this.p(bookmark);
        this.p(this.createNewObj('div', {class:`bookmark-${name.toUpperCase()}`}));
    }

    addContactDetails (details) {
        for (var d in details) {
            var wrap = this.createNewObj('dd');
            wrap.append(`<b>${d}</b>: ${details[d]}`);
            this.p(wrap);
        }
    }

    addOneRecord (record, loc, time, link) {
        var wrap = this.createNewObj('dd');
        wrap.append(`<span><a href="${link}">${record}</a></span>, ${loc}, ${time}`);
        this.p(wrap);
    }

    addProject (name, descr) {
        var project = $(`<li><div class="circle"></div>
                            <h4><a href="${INFO.rep_base()}${name}">${name}</a>:</h4>
						    <p>${descr}</p>
					     </li>`);
        this.p(project);
    }
}