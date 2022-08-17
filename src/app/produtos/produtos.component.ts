import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { IProduto } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const produtos = this.produtosService.getAll();

    this.route.queryParamMap.subscribe(params => {

      const descricao = params.get("descricao")?.toLowerCase();


      if(descricao) {

        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase()
        .includes(descricao));

      }

      this.produtos = produtos;

    })

  }

}
