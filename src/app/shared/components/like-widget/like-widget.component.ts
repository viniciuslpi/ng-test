import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { Component, Output, EventEmitter, Input, OnInit } from "@angular/core";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-like-widget',
    templateUrl: './like-widget.component.html',
    styleUrls: ['like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit{
    @Output() public liked = new EventEmitter<void>();
    @Input() public likes = 0;
    @Input() public id = null;

    public fonts = { faThumbsUp };

    constructor(private uniqueIdService: UniqueIdService){}
    
    ngOnInit(): void {
        if(!this.id){
            this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
        }
    }

    public like(): void{
        this.liked.emit();
    }

}